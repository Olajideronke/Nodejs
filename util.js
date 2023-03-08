/*util: The util module provides various utility functions that are helpful for debugging and other purposes. 
It includes functions for working with objects, formatting strings, and more.*/

const util = require('util');

const myObject = { foo: 'bar', baz: 42 };

console.log(util.inspect(myObject)); // { foo: 'bar', baz: 42 }
console.log(util.format('Hello, %s!', 'World')); // Hello, World!
