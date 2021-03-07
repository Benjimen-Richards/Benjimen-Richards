const http = require("http");
const socketIo = require("socket.io");
const express= require('express');
const route = require("./route.js");
const port = process.env.PORT || 4001;
const app = express();
const cors = require('cors')
app.use(route);
const server = http.createServer(app);
const io = socketIo(server,{
    cors: {
        origin: '*',
      }
});
io.on("connection", (socket) => {
  socket.emit('message',"welcome!")
  socket.broadcast.emit('message',"New user is joined")
   socket.on('sendmessage',(msg,callback)=>
   {
    io.emit('message',msg)
    callback()
   })
   socket.on('disconnect',()=>
   {
    io.emit('message',"User disconnected")
   })
  });

server.listen(port, () => console.log(`Listening on port ${port}`));
