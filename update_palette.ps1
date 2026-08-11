$paths = Get-ChildItem 'src\components\*.jsx' -Recurse
$paths += Get-Item 'src\index.css'
$paths += Get-Item 'src\App.jsx'

foreach ($file in $paths) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    if (-not $content) { continue }
    $content = $content -replace '#C8951C', '#EAB308'
    $content = $content -replace '#A87A12', '#CA8A04'
    $content = $content -replace '#3B2000', '#1C1400'
    $content = $content -replace '#7C5C1E', '#44330A'
    $content = $content -replace '#FAF6EF', '#FAF6E4'
    $content = $content -replace 'FFF8E6',  'FEFCE8'
    $content = $content -replace '#FDF9F2', '#FDFBF0'
    $content = $content -replace '#F5E6C0', '#FEF9C3'
    $content = $content -replace '#E8D4A0', '#FDE68A'
    $content = $content -replace 'shadow-amber', 'shadow-yellow'
    $content = $content -replace 'bg-amber-50', 'bg-yellow-50'
    $content = $content -replace 'bg-amber-100', 'bg-yellow-100'
    Set-Content $file.FullName $content -Encoding UTF8
    Write-Host "Updated: $($file.Name)"
}
Write-Host "Done!"
