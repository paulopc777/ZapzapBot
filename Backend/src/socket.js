const { Server } = require("socket.io");
const { createServer } = require('node:http');


const socketServer = createServer()

const io = new Server(socketServer, {
  cors: {
    origin: "http://localhost:3000"
  }
});



io.on('connection', (socket) => {
  console.log(socket.id)
})

module.exports = socketServer;
module.exports = io;
