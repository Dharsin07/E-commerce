const { spawn } = require('child_process');
const path = require('path');

// Kill existing node processes and restart server
const { exec } = require('child_process');

exec('taskkill /F /IM node.exe', (err, stdout, stderr) => {
  console.log('Restarting backend server...');
  
  const server = spawn('node', ['server.js'], {
    cwd: path.join(__dirname, 'backend'),
    stdio: 'inherit'
  });
  
  server.on('error', (err) => {
    console.error('Failed to start server:', err);
  });
  
  console.log('Backend server restarted with updated CORS settings');
});
