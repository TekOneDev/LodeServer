#!/usr/bin/env bash
# Builds the Windows package: Lode-Server-<version>-win-x64.zip (installer + self-contained app).
# Runs on Linux or Windows (Git Bash) with the .NET 10 SDK.
set -euo pipefail
cd "$(dirname "$0")"
# The sandbox (and soon the file readers) come from LodeCommon in common/, shared with Lode Desktop.
[ -f common/src/Lode.Sandbox/Lode.Sandbox.csproj ] || git submodule update --init common
VER=$(grep -oP '(?<=<Version>)[^<]+' Directory.Build.props)
OUT=${1:-dist}
PKG="$OUT/Lode-Server-$VER-win-x64"
rm -rf "$PKG" && mkdir -p "$PKG/App"
dotnet test tests/Lode.Tests --nologo -v q
dotnet publish src/Lode.Server     -c Release -r win-x64 --self-contained -o "$PKG/App" --nologo -v q
dotnet publish src/Lode.PluginHost -c Release -r win-x64 --self-contained -o "$PKG/App" --nologo -v q
# Built-in plugin manifests (bin/plugins/<id>/plugin.json), written by the plugin host itself.
dotnet run --project src/Lode.PluginHost -c Release -- --manifests "$PKG/App/plugins"
rm -f "$PKG"/App/*.pdb
cp installer/* "$PKG/"
# The installer shows and registers the version from Directory.Build.props.
sed -i "s/^\$Version = '[^']*'.*/\$Version = '$VER'/" "$PKG/install.ps1"
cp README.md "$PKG/README.md"
(cd "$OUT" && rm -f "Lode-Server-$VER-win-x64.zip" && zip -qr9 "Lode-Server-$VER-win-x64.zip" "Lode-Server-$VER-win-x64")
git archive --format=zip -o "$OUT/Lode-Server-$VER-source.zip" HEAD 2>/dev/null || true
echo "Built $OUT/Lode-Server-$VER-win-x64.zip"
