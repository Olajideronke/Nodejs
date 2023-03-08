/* 
zlib: The zlib module provides compression and decompression utilities for working with files and streams. 
It supports a variety of compression algorithms, including gzip and deflate.
*/

const zlib = require('zlib');
const fs = require('fs');

const input = fs.createReadStream('input.txt');
const output = fs.createWriteStream('input.txt.gz');

input.pipe(zlib.createGzip()).pipe(output);
console.log('File compressed!');
