console.log('starting app.js');

const _ = require('lodash');
const fs = require('fs');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log("Command: ", command);
console.log('Yargs:', argv);

if (command == 'add') {
  var note = notes.addNote(argv.title, argv.body);
  
  if(note) {
    console.log('Note created!');
    notes.logNote(note);
  } else {
    console.log("Note already added!");
  }
} 
else if(command == 'list'){
  notes.getAll();
} 
else if(command == 'read') {
  var note = notes.readNote(argv.title);
  
  if(note) {
    console.log('Note found!');
    notes.logNote(note);
  }
  else {
    console.log('Note not found!');
  }
  
}
else if(command == 'remove') {
  var isRemoved = notes.removeNote(argv.title);
  var message = isRemoved ? 'Note was removed!' : 'Note not found!';
  console.log(message);
}
else {
  console.log('Command not found');
}

