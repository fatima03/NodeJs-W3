var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler = function() {
    console.log('I hear a scream!');
}
eventEmitter.on('scream',myEventHandler);

console.log('I am running..');

eventEmitter.emit('scream');