console.log('starting app.js');

const os = require('os');
const _ = require('lodash');
const fs = require('fs');
const notes = require('./notes.js');
var user = os.userInfo();

//console.log(_.isString(true));
//console.log(_.isString("Chris"));
console.log(_.uniq([1,1,2,3,4,4,5,6,7,8,7,9]));
var add = notes.add(2,2);
console.log(add);


//fs.appendFile('greeting.txt',`Hello, ${user.username}.  I am ${notes.age} years old`);
//console.log(`Hello ${user.username}`);


