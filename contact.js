// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyDm_Bp9U6b2W_CvsaJq0Twz6RnYwbznXIE",
    authDomain: "theyogi-891f2.firebaseapp.com",
    databaseURL: "https://theyogi-891f2.firebaseio.com",
    projectId: "theyogi-891f2",
    storageBucket: "theyogi-891f2.appspot.com",
    messagingSenderId: "492083443938"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, message);

  // Show alert
  document.querySelector('.w-form-done').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.w-form-done').style.display = 'none';
  },5000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    message:message
  });
}