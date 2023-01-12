const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('node', () => {
  console.log('This is an event running on Node.js');
});

eventEmitter.emit('node');
