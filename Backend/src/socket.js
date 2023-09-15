const { Server } = require("socket.io");
const { createServer } = require('node:http');


const socketServer = createServer()

const io = new Server(socketServer, {
  cors: {
    origin: "*"
  }
});



io.on('connection', (socket) => {
  console.log(socket.id)
})


module.exports =  socketServer ;
module.exports = io;

