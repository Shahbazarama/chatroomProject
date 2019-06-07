let express = require('express');
let app = express();
let http = require('http').Server(app);
let port = process.env.PORT || 80;
let io = require('socket.io')(http);
let path = require('path');

app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/style'));


app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  socket.on('chat message', function(msg) {
    io.emit('chat message', msg);
  });
})

http.listen(port, function() {
  console.log('Listening on port', port);
});
