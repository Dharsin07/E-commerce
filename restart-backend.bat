@echo off
echo Stopping any existing Node.js processes...
taskkill /F /IM node.exe 2>nul
echo Starting backend server with updated CORS...
cd /d "c:\Users\smart\Desktop\12-12-2025\luxi - Copy (2)\backend"
node server.js
pause
