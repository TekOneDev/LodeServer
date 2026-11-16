# Removes Lode Server. The index and settings in C:\ProgramData\LodeServer are kept unless you add -RemoveData.
param([switch]$RemoveData)
$ErrorActionPreference = 'Continue'
$id = [Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()
if (-not $id.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    $a = @('-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', "`"$PSCommandPath`"")
    if ($RemoveData) { $a += '-RemoveData' }
    Start-Process powershell.exe -Verb RunAs -ArgumentList $a
    exit
}
$Dest = Join-Path $env:ProgramFiles 'Lode Server'
$Data = Join-Path $env:ProgramData 'LodeServer'
Write-Host "Removing Lode Server"
if (Get-Service LodeServer -ErrorAction SilentlyContinue) {
    Stop-Service LodeServer -Force
    for ($i = 0; $i -lt 60 -and (Get-Process -Name 'LodeServer' -ErrorAction SilentlyContinue); $i++) { Start-Sleep -Milliseconds 500 }
    Get-Process -Name 'LodeServer', 'Lode.PluginHost' -ErrorAction SilentlyContinue | Stop-Process -Force
    sc.exe delete LodeServer | Out-Null
}
Get-NetFirewallRule -DisplayName 'Lode Server*' -ErrorAction SilentlyContinue | Remove-NetFirewallRule
$menu = Join-Path $env:ProgramData 'Microsoft\Windows\Start Menu\Programs'
Remove-Item (Join-Path $menu 'Lode Search.url'), (Join-Path $menu 'Lode Server status.url') -ErrorAction SilentlyContinue
Remove-Item 'HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\LodeServer' -Recurse -ErrorAction SilentlyContinue
Set-Location $env:TEMP
Remove-Item $Dest -Recurse -Force -ErrorAction SilentlyContinue
if ($RemoveData) { Remove-Item $Data -Recurse -Force -ErrorAction SilentlyContinue; Write-Host "Removed the index and settings." }
else { Write-Host "Kept the index and settings in $Data (run with -RemoveData to delete them)." }
# A "Lode Server" HTTPS certificate made by the installer stays in the computer's store; delete it in certlm.msc if no longer wanted.
Write-Host "Lode Server is removed." -ForegroundColor Green
Start-Sleep -Seconds 3
