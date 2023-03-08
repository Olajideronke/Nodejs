/* 
dgram module in Node.js provides an implementation of UDP Datagram sockets, 
allowing you to send and receive datagrams over the network. UDP is a connectionless protocol, 
which means that you don't need to establish a connection before sending data.

*/
const dgram = require('dgram');

// create a UDP socket
const server = dgram.createSocket('udp4');

// handle incoming messages
server.on('message', (msg, rinfo) => {
  console.log(`Received ${msg.length} bytes from ${rinfo.address}:${rinfo.port}`);
  console.log(`Message: ${msg.toString()}`);
});

// start listening on a port
server.bind(1234, () => {
  console.log('UDP server listening on port 1234');
});

// create a UDP client socket
const client = dgram.createSocket('udp4');

// send a message to the server
const message = Buffer.from('Hello, server!');
client.send(message, 1234, 'localhost', (err) => {
  if (err) {
    console.error(`Error sending message: ${err}`);
  } else {
    console.log('Message sent to server');
  }
});

// close the client socket after a delay
setTimeout(() => {
  client.close();
}, 1000);
