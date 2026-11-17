using Lode.Errors;
using Lode.Server.Pipeline;
using SkiaSharp;
using Xunit;

namespace Lode.Tests;

/// <summary>Lode's own image decoder for OCR (0.2.3): WebP is read in-process because the service account has no Windows WebP codec.</summary>
public class ImageDecodeTests : IDisposable
{
    readonly string _dir = Directory.CreateTempSubdirectory("lode-img-").FullName;
    public void Dispose() { try { Directory.Delete(_dir, true); } catch { } }

    string Webp(string name, int w, int h, bool lossless = true)
    {
        var path = Path.Combine(_dir, name);
        using var bmp = new SKBitmap(w, h);
        using (var c = new SKCanvas(bmp))
        {
            c.Clear(SKColors.Transparent);
            using var paint = new SKPaint { Color = SKColors.Black };
            c.DrawRect(0, h / 2f, w / 2f, 4, paint);
        }
        using var data = bmp.Encode(SKEncodedImageFormat.Webp, lossless ? 100 : 80);
        File.WriteAllBytes(path, data.ToArray());
        return path;
    }

    static (int W, int H, int Bpp) BmpHeader(byte[] b)
    {
        Assert.Equal((byte)'B', b[0]); Assert.Equal((byte)'M', b[1]);
        return (BitConverter.ToInt32(b, 18), Math.Abs(BitConverter.ToInt32(b, 22)), BitConverter.ToInt16(b, 28));
    }

    [Theory]
    [InlineData(true)]
    [InlineData(false)]
    public void Webp_decodes_to_a_32_bit_bmp(bool lossless)
    {
        var bmp = ImageDecode.ToBmp(Webp("scan.webp", 640, 480, lossless), 10000);
        Assert.Equal((640, 480, 32), BmpHeader(bmp));
        // Transparent background comes out white (paper), the drawn bar black.
        Assert.Equal(new byte[] { 255, 255, 255 }, bmp[54..57]);
        int bar = 54 + (242 * 640 + 10) * 4;
        Assert.True(bmp[bar] < 40 && bmp[bar + 1] < 40 && bmp[bar + 2] < 40);
    }

    [Fact]
    public void Big_images_are_shrunk_to_the_ocr_limit()
    {
        var bmp = ImageDecode.ToBmp(Webp("big.webp", 3000, 1500), 1000);
        Assert.Equal((1000, 500, 32), BmpHeader(bmp));
    }

    [Fact]
    public void Webp_is_always_decoded_by_lode_and_heic_has_no_fallback()
    {
        Assert.True(ImageDecode.DecodeHere(@"Z:\Photos\core tray.WEBP"));
        Assert.False(ImageDecode.DecodeHere(@"Z:\Photos\core tray.jpg"));
        Assert.True(ImageDecode.CanRead("a.png"));
        Assert.False(ImageDecode.CanRead("a.heic"));
        var e = ImageDecode.NoDecoder("IMG_0001.heic");
        Assert.Equal("LODE-SRV-OCR-0008", e.Code);
        Assert.Contains("HEIC images", e.UserMessage);
    }

    [Fact]
    public void A_damaged_webp_gives_ocr_0009_with_a_reason()
    {
        var path = Webp("cut.webp", 400, 300, lossless: false);
        var bytes = File.ReadAllBytes(path);
        File.WriteAllBytes(path, bytes[..(bytes.Length / 3)]);
        var e = Assert.Throws<LodeException>(() => ImageDecode.ToBmp(path, 10000));
        Assert.Equal("LODE-SRV-OCR-0009", e.Code);
        Assert.StartsWith("OCR could not open this WebP image: ", e.UserMessage);
    }

    [Fact]
    public void Text_saved_as_webp_gives_ocr_0009()
    {
        var path = Path.Combine(_dir, "notes.webp");
        File.WriteAllText(path, "not a picture at all");
        var e = Assert.Throws<LodeException>(() => ImageDecode.ToBmp(path, 10000));
        Assert.Equal("LODE-SRV-OCR-0009", e.Code);
    }
}
