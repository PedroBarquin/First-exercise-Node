const os = require('os');
const fs = require('fs');

const EventEmitter = require('events');
const Logger = require("./logger");
const logger = new Logger();

const Exercisi = require("./exercisi-1");
const Exercisi2 = require("./exercisi-2");
const {Persona} = require("./exercisi-2");

console.log(Exercisi.iterative());

const nom1 = "Pedro";
const nom2 = "Maria";
console.log(Exercisi2.sumaNoms(nom1, nom2));

const pepe = new Persona(nom1);
console.log(pepe.dirNom());

// Listener const Exercisi = require("./exercisi-1");
// const exercisi = new Exercisi();
/* logger.on('messageLogged',(arg) => { // e, eventArg
    console.log('Listener', arg);
})*/

//constlog = require('./logger');

//log('message') logger.log('message');


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

