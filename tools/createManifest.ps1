$pathToManifest = '..\src\www\manifest.appcache'

$currentPath = $Pwd
cd ..\src\www\
$pathToRemove = $Pwd
$pathToRemoveString = $pathToRemove.ToString().Replace('\', '\\') + '\\'
cd $currentPath

# Clear current file
Out-File -Encoding utf8 $pathToManifest

# Title
'CACHE MANIFEST' | Out-File -Append -Encoding utf8 $pathToManifest

# A random string in order to update the appcache
.\createRandomString.ps1 | Out-File -Append -Encoding utf8 $pathToManifest

# All resources being cached
'CACHE:' | Out-File -Append -Encoding utf8 $pathToManifest
Get-ChildItem -Path ..\src\www\public -Recurse -File | % { $_.FullName.ToString() -replace($pathToRemoveString, '') -replace('\\', '/') | Out-File -Append -Encoding utf8 $pathToManifest }
"scripts/boundle.min.js" | Out-File -Append -Encoding utf8 $pathToManifest

