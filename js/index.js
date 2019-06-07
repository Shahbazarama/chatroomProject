let express = require('express');
let app = express();

const socket = io(http);

socket.on('connection', (socket) => {
  console.log('user.connected')
})

socket.on('connection', (socket) =>
{
  console.log('user.connected')

  socket.on('disconnect'() =>
  {
    console.log('disconnected');
  })
})









//////////////
let port = process.env.PORT || 8000;

app.listen(port, function() {
  console.log('Listening on port', port);
});
