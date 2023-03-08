/* stream: The stream module provides an API for working with streaming data in Node.js. 
You can create readable and writable streams, and pipe data between them using this module.  */


const fs = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();
const readStream = fs.createReadStream('/path/to/my/file.txt');
const writeStream = fs.createWriteStream('/path/to/my/file.txt.gz');

readStream.pipe(gzip).pipe(writeStream);
