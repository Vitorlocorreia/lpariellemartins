$src = "C:\Users\Adels\.gemini\antigravity\brain\311dea80-0653-4c75-95d7-07a27e133cf1\.user_uploaded"
$dst = "C:\Users\Adels\OneDrive\Documentos\LPArielli\public\images\proof"

New-Item -ItemType Directory -Force -Path $dst | Out-Null

$files = @(
  "media_1787073632930.jpg",
  "media_1787073632950.jpg",
  "media_1787073633003.jpg",
  "media_1787073633767.jpg",
  "media_1787073633787.jpg",
  "media_1787073636790.jpg",
  "media_1787073637004.jpg",
  "media_1787073637014.jpg",
  "media_1787073637022.jpg",
  "media_1787073637031.jpg"
)

$names = @(
  "supermercado-cesta-sorrindo.jpg",
  "supermercado-caminhando.jpg",
  "supermercado-escolhendo.jpg",
  "supermercado-caminhando-2.jpg",
  "carro-abrindo-porta.jpg",
  "carro-entrando.jpg",
  "carrinho-supermercado.jpg",
  "carrinho-supermercado-2.jpg",
  "carrinho-supermercado-sorrindo.jpg",
  "carro-saindo.jpg"
)

for ($i = 0; $i -lt $files.Length; $i++) {
  $srcFile = Join-Path $src $files[$i]
  $dstFile = Join-Path $dst $names[$i]
  Copy-Item $srcFile $dstFile -Force
  Write-Host "Copied: $($names[$i])"
}
Write-Host "Done! $($files.Length) files copied."
