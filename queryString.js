/* querystring: The querystring module provides utilities for working with query strings, 
which are often used in URLs to pass data between a client and a server.*/

const querystring = require('querystring');

const params = { foo: 'bar', baz: 42 };

console.log(querystring.stringify(params)); // foo=bar&baz=42
console.log(querystring.parse('foo=bar&baz=42')); // { foo: 'bar', baz: '42' }
