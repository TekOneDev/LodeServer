using Lode.Plugins;

// Runs one of the built-in plugins out of process: Lode.PluginHost.exe <plugin id>
// Each built-in is a separate library speaking the same contract as third-party plugins.
var id = args.Length > 0 ? args[0] : "";
return id switch
{
    "lode.source.folder" => PluginRunner.Run(new Lode.Plugins.Files.FolderSource()),
    "lode.filter.pdf" => PluginRunner.Run(new Lode.Plugins.Pdf.PdfFilter()),
    "lode.filter.office" => PluginRunner.Run(new Lode.Plugins.Office.OfficeFilter()),
    "lode.filter.image" => PluginRunner.Run(new Lode.Plugins.Image.ImageFilter()),
    "lode.filter.rocscience" => PluginRunner.Run(new Lode.Plugins.Rocscience.RocscienceFilter()),
    "lode.filter.datamine" => PluginRunner.Run(new Lode.Plugins.Datamine.DatamineFilter()),
    "lode.enrich.au-geo" => PluginRunner.Run(new Lode.Plugins.AuGeo.AuGeoEnricher()),
    "lode.filter.readers" => PluginRunner.Run(new Lode.Plugins.Readers.ReadersFilter()),
    "--manifests" => Manifests(args.Length > 1 ? args[1] : "plugins"),
    "--sandbox-selftest" => SandboxTest.Parent(),
    "--sandbox-child" => SandboxTest.Child(args.Skip(1).ToArray()),
    _ => Usage(),
};

static int Usage()
{
    Console.Error.WriteLine("Usage: Lode.PluginHost <plugin id> | --manifests <folder> | --sandbox-selftest (LODE-SRV-PLUG-0012)");
    return 2;
}

// Writes plugins\<id>\plugin.json for every built-in (used by the build).
static int Manifests(string dir)
{
    var all = new PluginManifest[]
    {
        new Lode.Plugins.Files.FolderSource().Manifest, new Lode.Plugins.Pdf.PdfFilter().Manifest, new Lode.Plugins.Office.OfficeFilter().Manifest,
        new Lode.Plugins.Image.ImageFilter().Manifest, new Lode.Plugins.Rocscience.RocscienceFilter().Manifest,
        new Lode.Plugins.Datamine.DatamineFilter().Manifest, new Lode.Plugins.AuGeo.AuGeoEnricher().Manifest,
        new Lode.Plugins.Readers.ReadersFilter().Manifest,
    };
    foreach (var m in all)
    {
        m.Exec = "{bin}/Lode.PluginHost.exe";
        m.Args = [m.Id];
        var d = Path.Combine(dir, m.Id);
        Directory.CreateDirectory(d);
        File.WriteAllText(Path.Combine(d, "plugin.json"), System.Text.Json.JsonSerializer.Serialize(m, new System.Text.Json.JsonSerializerOptions(Contract.Json) { WriteIndented = true }));
    }
    return 0;
}
