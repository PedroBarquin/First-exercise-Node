var url = 'http://mylogger.io/log';
function log(message){
    // Send an HTTP request
    console.log(message)
}

module.exports = log;

/*(function(exports, require, module, __filename, __dirname) {

    console.log(__filename);
    console.log(__dirname);

    const EventEmitter = require('events');


const EventEmitter = require('events')// Emitter+/
const emitter = new EventEmitter();
var url = 'http://mylogger.io/log';

    class Logger extends EventEmitter{
         log(message) {
            // Send an HTTP request
            console.log(message)

            // Raise an event
            this.emit('messageLogged', {id: 1, url: 'http://'});

        }
    }
    module.exports = log;

    */
