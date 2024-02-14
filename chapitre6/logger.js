
const uuid = require('uuid');
const EventEmitter = require('events');

class Logger extends EventEmitter{
    log(msg){
        let maDate = new Date().toLocaleString();
        this.emit('message', {if: uuid.v4(),date: maDate, mess: msg})
    }
}

module.exports = Logger;