let express = require('express');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io');

const socket = io(http);

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '..', '/views/index.html'));
});

socket.on('connection', (socket) => {
  console.log('user.connected')
})

socket.on('connection', (socket) => {
  console.log('user.connected')

  socket.on('disconnect', () => {
    console.log('disconnected');
  })
})
//
// app.get('/', function (req, res) {
//   //
// })







//////////////
let port = process.env.PORT || 8000;

http.listen(port, function() {
  console.log('Listening on port', port);


});
