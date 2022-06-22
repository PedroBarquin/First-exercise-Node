const os = require('os');
const fs = require('fs');

const EventEmitter = require('events');
const Logger = require("./logger");
const logger = new Logger();

// Listener
logger.on('messageLogged',(arg) => { // e, eventArg
    console.log('Listener', arg);
})

//constlog = require('./logger');

//log('message')

logger.log('message');

/*
//const files = fs.readdirSync('./');
//console.log(files);

fs.readdir('./', function(err, files){
    if(err) console.log('Error', err);
    else console.log('Result', files);
});
 var totalMemory = os.totalmem();

var freeMem = os.freemem();
console.log(`Total memory: ${totalMemory}`);
console.log(`Free memory: ${freeMem}`);*/

