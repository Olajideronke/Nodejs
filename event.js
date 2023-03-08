/* 
events: The events module provides an event-driven architecture that allows you to create and emit custom events. 
It can be used to build loosely-coupled, highly-scalable applications.
*/

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('my-event', (arg1, arg2) => {
  console.log('my-event was fired!', arg1, arg2);
});

myEmitter.emit('my-event', 'foo', 'bar'); // my-event was fired! foo bar
