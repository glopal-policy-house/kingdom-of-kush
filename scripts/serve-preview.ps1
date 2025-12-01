# Start Vite preview, open browser, and keep the process running until Enter is pressed.
Write-Output "Starting Vite preview (previewing dist/)..."
$proc = Start-Process -FilePath "node" -ArgumentList "./node_modules/vite/bin/vite.js preview --host" -PassThru
Start-Sleep -Seconds 1
try {
  Start-Process "http://localhost:5173/"
} catch {
  # ignore if browser open fails
}
Write-Output "Vite preview started (PID: $($proc.Id)). Press Enter to stop preview."
[void][System.Console]::ReadLine()
try {
  Stop-Process -Id $proc.Id -Force -ErrorAction SilentlyContinue
  Write-Output "Stopped Vite preview."
} catch {
  Write-Warning "Could not stop Vite preview process. You may stop it manually." 
}
