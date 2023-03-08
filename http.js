//http: This module provides an HTTP server and client implementation. 
// It is used to handle HTTP requests and responses, and is a core component of web development in Node.js.
var http = require("http");

http.createServer(function(request, response) {
    //HTTP Status: 200 : OK
    //Content Type: text/plain

    response.writeHead(200, {'Content-Type': 'text/plain'});
    //send the response body as 'Hello World'
    response.end('Hello World');

}) .listen(8081);
//console will print the message
console.log('Server running at http://127.0.0.1:8081')