let express = require('express');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io');

const socket = io(http);

socket.on('connection', (socket) => {
  console.log('user.connected')
})

socket.on('connection', (socket) =>
{
  console.log('user.connected')

  socket.on('disconnect', () =>
  {
    console.log('disconnected');
  })
})

app.get('/', function (req, res) {
  res.redirect('/views/index.html');
})







//////////////
let port = process.env.PORT || 8000;

http.listen(port, function() {
  console.log('Listening on port', port);


});
