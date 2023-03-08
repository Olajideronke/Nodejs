
var http = require("http");
var urls = require('url');

http.createServer(function(request, response) {
    //HTTP Status: 200 : OK
    //Content Type: text/plain

    response.writeHead(200, {'Content-Type': 'text/plain'});
    //send the response body as 'Hello World'
    // response.end('Hello World');
    
var _url = urls.parse('https://www.gtbank.com:9090/new?acc=1212188888888211;bal=2000000000000')
var _protocol = _url.protocol;
var _hostname = _url.hostname;
var _host = _url.host;
var _path = _url.pathname;
var _search= _url._search;
response.end(`Hello World\n The GTBank protocol name = ${_protocol} \n
The GTBank host name = ${_hostname} and host is ${_host} \n The GTBank URL path is ${_path}
The GTBank query string = ${_search}`);


}) .listen(8083);
//console will print the message
console.log('Server running at http://127.0.0.1:8083')


