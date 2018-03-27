//Make Connection
var socket = io.connect('http://localhost:4000')

 // Query Dom
 var message = document.getElementById('message'),
    handle= document.getElementById('handle'),
    btn= document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');


    //Emit Event // vanila js
    btn.addEventListener('click',function(){
      // emit msg down the server // take two parameters// name of the msg,what the actual msg is
      socket.emit('chat',
    {
      message: message.value,
      handle:handle.value
    });
  });

message.addEventListener('keypress',function(){
  socket.emit('typing',handle.value);
})

  // listen for addEventListener
  socket.on('chat',function(data){
    feedback.innerHTML=""
    output.innerHTML += '<p><strong>'+data.handle+' :</strong>'+data.message+'</p>'
  })


socket.on('typing',function(data){
  feedback.innerHTML = '<p><em>'+data+'is typing a message ......</em></p>';
})
