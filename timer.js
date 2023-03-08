/*
The timer module in Node.js provides functions to execute a code block or function after a certain delay or at a certain interval.
*/
let counter = 0;
setInterval(() => {
  console.log(`Counter value is ${counter}`);
  counter++;
}, 1000);
