
//child_process: The child_process module allows you to spawn child processes and communicate with them.


const { spawn } = require('child_process');

// Spawning a child process
const child = spawn('ls', ['-l']);

// Listening for output from the child process
child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });
  
  ls.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });
  
  ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
