/*
os: The os module provides information about the operating system, 
such as the CPU architecture, memory usage, and network interfaces.
*/

const os = require('os');

console.log(os.arch()); // x64
console.log(os.platform()); // darwin
console.log(os.totalmem()); // 8589934592
console.log(os.networkInterfaces()); // { en0: [...] }
