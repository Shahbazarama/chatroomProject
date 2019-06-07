$(function () {
   var socket = io();
   $('#sendField').submit(function(e){
     e.preventDefault(); // prevents page reloading
     socket.emit('chat message', $('#messageField').val());
     $('#messageField').val('');
     return false;
   });
   socket.on('chat message', function(message){
     $('#messages').append($('<li>').text(message))
   });
 });
