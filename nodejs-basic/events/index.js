const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('birthday', (name) => {
  console.log(`Happy birthday ${name}!`);
});

myEmitter.emit('birthday', 'Sabilla');
