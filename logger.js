const EventEmitter = require("events"); //class

let url = "http://mylogger.io/log";

class Logger extends EventEmitter {
  log(message) {
    //Send an HTTP request
    console.log(message);

    //Raise an event
    this.emit("messageLogged", { id: 1, url: "http://" }); //signaling event has happened
  }
}

module.exports = Logger;
