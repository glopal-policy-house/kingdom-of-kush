# Open the built `dist/index.html` in the default browser
$file = Resolve-Path -Path "./dist/index.html"
if (-not (Test-Path $file)) {
  Write-Error "dist/index.html not found. Please run `npm run build` first."
  exit 1
}
Start-Process $file
