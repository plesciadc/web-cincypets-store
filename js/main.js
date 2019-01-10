var name, email, photoUrl, uid, emailVerified;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      name = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      emailVerified = user.emailVerified;
      uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                       // this value to authenticate with your backend server, if
                       // you have one. Use User.getToken() instead.
      console.log(name + " is logged in.");
      setupHeader(name);
  } else {
      document.getElementById('headerUser').textContent = "Log In / Register";
  }
});

function setupHeader(name) {
  var headerText = "Welcome, " + name;
  document.getElementById('headerUser').textContent = headerText;
  document.getElementById('signOutButton').textContent = "Log Out";
}

function signOut() {
  firebase.auth().signOut().then(function() {
  location.reload();
  }).catch(function(error) {
  // An error happened.
  });
}

// Event Listeners
document.getElementById('signOutButton').addEventListener('click', signOut, false);