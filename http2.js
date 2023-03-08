/*  
http2: The http2 module provides an implementation of the HTTP/2 protocol in Node.js. 
You can create HTTP/2 servers and clients using this module. 
*/

const http2 = require('http2');
const fs = require('fs');

const server = http2.createSecureServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
});

server.on('stream', (stream, headers) => {
  stream.respond({
    'content-type': 'text/plain',
    ':status': 200
  });
  stream.end('Hello, world!');
});

server.listen(8443);
