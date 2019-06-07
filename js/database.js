(function(){
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

  const usernameField = document.getElementById('userField')
  const messageField = document.getElementById('messageField')
  const sendMessageButton = document.getElementById('sendMessageButton')

  sendMessageButton.addEventListener('click', function(e){
    const username = usernameField.value
    const message = messageField.value

    db.collection('Messages').add({
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      message: message,
      user: username
    }).then(function(docRef) {
      console.log('doc written with ID: ', docRef.id)
    }).catch(function(e) {
      console.log('error adding doc: ', e)
    })
  })
}());
