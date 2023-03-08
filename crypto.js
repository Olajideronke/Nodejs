/* 
crypto: The crypto module provides cryptographic functionality, 
such as hashing, encryption, and decryption.
*/
const crypto = require('crypto');

const hash = crypto.createHash('sha256');
hash.update('Hello, World!');
console.log(hash.digest('hex')); // 97c5ed3d6712e3c3e73f1b3e70f7b95869b9ac88a49cf0c4276d7bf2e3d3f566

const cipher = crypto.createCipher('aes192', 'password');
let encrypted = cipher.update('Hello, World!', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted); // 9d7dcfbaa29e7d7281f5448d2ff2a49c
