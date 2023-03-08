/* 
string_decoder: The string_decoder module is used for decoding buffers into strings in Node.js. 
You can use this module to decode UTF-8 or other character encodings from buffer objects.
*/

const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');

const buf1 = Buffer.from([0xE3, 0x81, 0x82, 0xE3, 0x81, 0x84]);
const buf2 = Buffer.from([0xE3, 0x81]);

console.log(decoder.write(buf1)); // 'あい'
console.log(decoder.write(buf2)); // ''
