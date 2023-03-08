/*
path: The path module provides utilities for working with file paths. 
It can be used to join and normalize paths, 
extract the directory and file names, and determine the absolute path.
*/
const path = require('path');

const filePath = '/path/to/myfile.txt';

console.log(path.dirname(filePath)); // /path/to
console.log(path.basename(filePath)); // myfile.txt
console.log(path.extname(filePath)); // .txt
console.log(path.join('/path', 'to', 'myfile.txt')); // /path/to/myfile.txt
console.log(path.resolve('myfile.txt')); // /path/to/current/dir/myfile.txt
