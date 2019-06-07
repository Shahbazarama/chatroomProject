<<<<<<< HEAD
let express = require('express');
let app = express();
let http = require('http').Server(app);
let port = process.env.PORT || 80;
let io = require('socket.io')(http);
let path = require('path');

app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/style'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
=======
(function() {
  let express = require('express');
  let app = express();
  let http = require('http').Server(app);
  let port = process.env.PORT || 80;
  let io = require('socket.io')(http);
  let path = require('path');

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC4WDPJbCsdO3FCf7qhm20z3gDfxW07xa0",
    authDomain: "chatroom-6e20b.firebaseapp.com",
    databaseURL: "https://chatroom-6e20b.firebaseio.com",
    projectId: "chatroom-6e20b",
    storageBucket: "chatroom-6e20b.appspot.com",
    messagingSenderId: "482219719182",
    appId: "1:482219719182:web:38ed12a179e3fa94"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();

  app.use(express.static(__dirname + '/js'));

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
>>>>>>> 3cb524f5e8eabd11aa051b16ec89c059a7f496f5
  });


  const usernameField = document.getElementById('userField')
  const messageField = document.getElementById('messageField')
  const sendMessageButton = document.getElementById('sendMessageButton')

  sendMessageButton.addEventListener('click', function(e){
    const username = usernameField.value
    const message = messageField.value

    db.collection('Messages').add({
      date: firebase.firestore.Timestamp.formDate(new Date()),
      message: message,
      user: username
    }).then(function(docRef) {
      console.log('doc written with ID: ', docRef.id)
    }).catch(function(e) {
      console.log('error adding doc: ', e)
    })
  })


}());
