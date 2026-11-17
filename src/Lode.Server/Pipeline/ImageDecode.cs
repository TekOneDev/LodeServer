using Lode.Errors;
using SkiaSharp;

namespace Lode.Server.Pipeline;

/// <summary>
/// Lode Server's own image decoder for OCR (0.2.3), in-process (SkiaSharp, MIT: Google's Skia with libwebp; a native library loaded into the worker, no process started).
/// Windows reads WebP only through the "WebP Image Extensions" Store app, and Store codecs are installed per user, so
/// the LodeServer virtual service account never has them: WIC failed with WINCODEC_ERR_COMPONENTNOTFOUND
/// (LODE-SRV-OCR-0007 before 0.2.3). WebP is always decoded here; other formats go to Windows first and come here only
/// when Windows has no decoder. The result is a plain 32-bit BMP that Windows' BitmapDecoder always reads.
/// </summary>
public static class ImageDecode
{
    /// <summary>Formats decoded here rather than by Windows, because Windows has no built-in decoder for them.</summary>
    public static readonly string[] Always = [".webp"];

    /// <summary>Formats this decoder knows (by extension), for the fallback when Windows has no decoder.</summary>
    public static readonly string[] Known = [".webp", ".png", ".jpg", ".jpeg", ".jpe", ".jfif", ".gif", ".bmp", ".ico", ".wbmp"];

    /// <summary>Bigger pictures are refused before decoding (a 200 MP image is 800 MB of pixels).</summary>
    public const long MaxPixels = 200_000_000;

    public static bool DecodeHere(string path) => Always.Contains(Path.GetExtension(path).ToLowerInvariant());
    public static bool CanRead(string path) => Known.Contains(Path.GetExtension(path).ToLowerInvariant());

    /// <summary>"WebP", "HEIC": how a format is named in messages.</summary>
    public static string TypeName(string path)
    {
        var ext = Path.GetExtension(path).TrimStart('.').ToUpperInvariant();
        return ext.Length == 0 ? "this kind of" : ext switch { "WEBP" => "WebP", "JPG" or "JPE" or "JFIF" => "JPEG", "TIF" => "TIFF", _ => ext };
    }

    /// <summary>
    /// Decodes the image (first frame of an animation) onto white, shrinks it to <paramref name="maxSide"/> on the long
    /// side if needed, and returns it as a top-down 32-bit BMP. Throws <see cref="LodeException"/> LODE-SRV-OCR-0009 if it can't.
    /// </summary>
    public static byte[] ToBmp(string path, int maxSide)
    {
        try
        {
            using var file = new FileStream(path, FileMode.Open, FileAccess.Read, FileShare.ReadWrite | FileShare.Delete, 1 << 16);
            using var codec = SKCodec.Create(file, out var opened);
            if (codec == null) throw Unreadable(path, Reason(opened));
            int w = codec.Info.Width, h = codec.Info.Height;
            if (w <= 0 || h <= 0) throw Unreadable(path, "the picture has no size");
            if ((long)w * h > MaxPixels) throw Unreadable(path, $"it is {w:N0} x {h:N0} pixels, more than Lode reads for OCR");
            var srcInfo = new SKImageInfo(w, h, SKColorType.Bgra8888, SKAlphaType.Premul);
            using var src = new SKBitmap(srcInfo);
            var got = codec.GetPixels(srcInfo, src.GetPixels());
            if (got != SKCodecResult.Success) throw Unreadable(path, Reason(got));

            double s = maxSide > 0 && Math.Max(w, h) > maxSide ? maxSide / (double)Math.Max(w, h) : 1;
            int dw = Math.Max(1, (int)(w * s)), dh = Math.Max(1, (int)(h * s));
            using var dst = new SKBitmap(new SKImageInfo(dw, dh, SKColorType.Bgra8888, SKAlphaType.Premul));
            using (var canvas = new SKCanvas(dst))
            using (var img = SKImage.FromBitmap(src))
            {
                canvas.Clear(SKColors.White);   // transparent parts read as paper, not black
                canvas.DrawImage(img, new SKRect(0, 0, dw, dh), new SKSamplingOptions(SKCubicResampler.Mitchell));
            }
            return Bmp(dst);
        }
        catch (LodeException) { throw; }
        catch (Exception e) when (e is IOException or ArgumentException or InvalidOperationException)
        {
            throw Unreadable(path, SafeText.Detail(e), e);
        }
    }

    static string Reason(SKCodecResult r) => r switch
    {
        SKCodecResult.IncompleteInput or SKCodecResult.ErrorInInput => "the file ends early or is damaged",
        SKCodecResult.InvalidInput or SKCodecResult.Unimplemented => "what is inside doesn't match its extension, or the file is damaged",
        SKCodecResult.InvalidScale or SKCodecResult.InvalidParameters or SKCodecResult.InvalidConversion => "the picture uses a layout Lode can't convert",
        _ => "the picture data is damaged (" + r + ")",
    };

    /// <summary>A top-down 32-bit BGRA BMP of the bitmap (BITMAPFILEHEADER + BITMAPINFOHEADER), which every Windows decoder reads.</summary>
    static byte[] Bmp(SKBitmap b)
    {
        int stride = b.Width * 4, size = stride * b.Height;
        var o = new byte[54 + size];
        o[0] = (byte)'B'; o[1] = (byte)'M';
        BitConverter.TryWriteBytes(o.AsSpan(2), 54 + size);
        BitConverter.TryWriteBytes(o.AsSpan(10), 54);
        BitConverter.TryWriteBytes(o.AsSpan(14), 40);
        BitConverter.TryWriteBytes(o.AsSpan(18), b.Width);
        BitConverter.TryWriteBytes(o.AsSpan(22), -b.Height);   // negative: rows run top to bottom
        BitConverter.TryWriteBytes(o.AsSpan(26), (short)1);
        BitConverter.TryWriteBytes(o.AsSpan(28), (short)32);
        BitConverter.TryWriteBytes(o.AsSpan(34), size);
        var px = b.GetPixelSpan();
        if (b.RowBytes == stride) px[..size].CopyTo(o.AsSpan(54));
        else for (int y = 0; y < b.Height; y++) px.Slice(y * b.RowBytes, stride).CopyTo(o.AsSpan(54 + y * stride));
        return o;
    }

    public static LodeException Unreadable(string path, string detail, Exception? inner = null) =>
        new(Err.Srv.Ocr.OcrImageUnreadable, new { type = TypeName(path), detail }, inner);

    public static LodeException NoDecoder(string path) => new(Err.Srv.Ocr.OcrNoImageDecoder, new { type = TypeName(path) });
}
