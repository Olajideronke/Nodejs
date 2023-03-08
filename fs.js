/*
fs: The fs module provides an API for interacting with the file system. 
It allows you to read and write files, as well as perform other operations like creating directories and deleting files.
*/
const fs = require('fs');

// Reading a file
fs.readFile('myfile.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Writing to a file
fs.writeFile('myfile.txt', 'Hello, World!', (err) => {
  if (err) throw err;
  console.log('File written!');
});
