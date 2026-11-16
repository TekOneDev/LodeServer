@echo off
rem Installs Lode Server (beta). Windows will ask for administrator permission once.
rem Add  -Lan  (other PCs may use it),  -Https  (encrypted), or  -Account CORP\svc-lode$  after install.ps1 below.
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0install.ps1" %*
echo.
pause
