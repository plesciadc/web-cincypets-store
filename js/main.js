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
  } else {
      console.log("Logged Out");
    // No user is signed in.
  }
});