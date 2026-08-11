$paths = Get-ChildItem 'src\components\*.jsx' -Recurse
$paths += Get-Item 'src\App.jsx'

foreach ($file in $paths) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    if (-not $content) { continue }
    # Botoes amarelos precisam de texto escuro para contraste
    $content = $content -replace 'bg-\[#EAB308\] (hover:bg-\[#CA8A04\]|active:bg-\[#CA8A04\]) text-white', 'bg-[#EAB308] $1 text-[#1C1400] font-bold'
    # Tambem corrige texto branco em fundo amarelo inline
    $content = $content -replace "bg-\[#EAB308\]([^`"]*?)text-white", 'bg-[#EAB308]$1text-[#1C1400]'
    Set-Content $file.FullName $content -Encoding UTF8
}
Write-Host "Button colors fixed!"
