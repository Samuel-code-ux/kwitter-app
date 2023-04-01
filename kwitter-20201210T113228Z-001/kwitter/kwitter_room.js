
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBG1edTL1avbB96pk8babK1hrO2ificXrs",
      authDomain: "kwitter-573ee.firebaseapp.com",
      projectId: "kwitter-573ee",
      storageBucket: "kwitter-573ee.appspot.com",
      messagingSenderId: "937285273168",
      appId: "1:937285273168:web:d8cb86ddc07aa49bc2f355"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
