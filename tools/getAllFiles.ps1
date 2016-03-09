$currentPath = $Pwd
cd ..\src\www\
$pathToRemove = $Pwd
$pathToRemoveString = $pathToRemove.ToString().Replace('\', '\\')
cd $currentPath
Out-File -Encoding utf8 .\filesInPublicDir.txt
Get-ChildItem -Path ..\src\www\public -Recurse -File | % { $_.FullName.ToString() -replace($pathToRemoveString, '') -replace('\\', '/') | Out-File -Append -Encoding utf8 .\filesInPublicDir.txt }
"/scripts/boundle.min.js" | Out-File -Append -Encoding utf8 .\filesInPublicDir.txt