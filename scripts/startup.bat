@echo off
REM Startup script for Kingdom of Kush dev server
REM This batch file launches the Vite dev server in the background

cd /d "C:\Users\hajar hassan\Desktop\front -end study and practice\git & github,javascript\design 2"

REM Start the dev server minimized in the background
start "" /min node ".\node_modules\vite\bin\vite.js"

REM Optional: Open the browser after a short delay
timeout /t 2 /nobreak
start http://localhost:5173/

exit
