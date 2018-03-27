var express = require('express');
var socket = require('socket.io');

// setup App

var app = express();
// to listen specific port number
var server = app.listen(4000,function(){
  console.log("listening to requests on port 4000")
})


// Static files // To Show in browser
app.use(express.static('public'));


//Socket setup // attach server with socket
var io = socket(server);


// to see the connection when made with browser // listen for event
io.on('connection',function(socket){ // pass the param socket to see the every client connect
  console.log("made socket connection",socket.id)
  // respond to the client when they express
  socket.on('chat',function(data){
    // all of the socket connect to the server
    io.sockets.emit('chat',data);
  })
// broadcast msg to every one but not its only
  socket.on('typing',function(data){
    socket.broadcast.emit('typing',data)
  });

})
