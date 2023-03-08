/*The net module in Node.js is a built-in module that provides asynchronous network communication capabilities for creating both TCP and UNIX domain sockets.
 It enables you to create a client or a server that can communicate with other servers or clients over the network.*/

 const net = require('net');

const server = net.createServer(socket => {
  // This callback function is called whenever a client connects to the server
  console.log('Client connected');

  // Send a message to the client
  socket.write('Welcome to my server!\n');

  // When the client sends data, log it to the console
  socket.on('data', data => {
    console.log(`Received data from client: ${data}`);
  });

  // When the client disconnects, log it to the console
  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log('Server started');
});
