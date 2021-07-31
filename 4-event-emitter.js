const events = require('events'); // importing events

let eventEmitter = new events.EventEmitter(); // creating an event emitter object

// defining my own event
eventEmitter.on('open_connection', function(){
  console.log('CONNECTION OPENED');

  eventEmitter.on('data_received', function(data) {
    console.log("DATA RECEIVED SUCCESSFULLY!");
    console.log(data);
  });

  eventEmitter.emit('data_received', 'Success!');

});

console.log('Before Emitting Event');

// Trigger / emit the custom event
eventEmitter.emit('open_connection');

console.log('Program Ended');



