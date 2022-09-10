@echo off

md c:\data\db\
Powershell.exe -executionpolicy Bypass -File "\\icet1vm.cencol.ca\1VM\InstallCompass.ps1"
"C:\Program Files\MongoDB\Server\4.2\bin\mongod"