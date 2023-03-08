/*
buffer module provides a way to handle binary data, particularly large chunks of raw data, 
such as those found in network communication or file system operations.
*/

// Create a new buffer with a string
const myBuffer = Buffer.from('hello world', 'utf8');

// Print the buffer as a string
console.log(myBuffer.toString('utf8')); // outputs: 'hello world'

// Get the length of the buffer
console.log(myBuffer.length); // outputs: 11

// Access the first byte of the buffer
console.log(myBuffer[0]); // outputs: 104

// Copy a portion of the buffer
const partOfBuffer = Buffer.alloc(5);
myBuffer.copy(partOfBuffer, 0, 0, 5); // copy the first 5 bytes
console.log(partOfBuffer.toString('utf8')); // outputs: 'hello'

// Concatenate two buffers
const buffer1 = Buffer.from('hello', 'utf8');
const buffer2 = Buffer.from(' world', 'utf8');
const concatenatedBuffer = Buffer.concat([buffer1, buffer2]);
console.log(concatenatedBuffer.toString('utf8')); // outputs: 'hello world'
