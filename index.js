let express = require('express');
let app = express();
let http = require('http').Server(app);
let port = process.env.PORT || 8000;
let io = require('socket.io')(http);
let path = require('path');

app.use(express.static(__dirname + '/js'));


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('user.connected')
})

http.listen(port, function() {
  console.log('Listening on port', port);
});
