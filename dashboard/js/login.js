const firebaseConfig = {
  apiKey: "AIzaSyD-oMWkRdHoz9fUVm_upJy_O9lmGlyQuog",
  authDomain: "kareraportfolio-6f3a7.firebaseapp.com",
  projectId: "kareraportfolio-6f3a7",
  storageBucket: "kareraportfolio-6f3a7.appspot.com",
  messagingSenderId: "666133715543",
  appId: "1:666133715543:web:cb969abf9a8d222cc02112",
  measurementId: "G-Z9M2E9F1D7",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// db.collection("blog")
//   .add({
//     tittle: "katrta",
//     decv: "jafrere",
//     image: "text",
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// SIGNUP

const signup = (e) => {
  e.preventDefault();
  const signup_name = document.getElementById("signup_name").value;
  const email = document.getElementById("signup_email").value;
  const password = document.getElementById("singup_password").value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
};
document.getElementById("signup_button").addEventListener("click", signup);

// ........LOGIN...................

const login = (e) => {
  const email = document.getElementById("login_email").value;
  const password = document.getElementById("login_password").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      // ...
      location.href = "../../dashboard/html/dashboard.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      console.log(errorCode);
    });
  //   location.href = "../../dashboard/html/dashboard.html";
};
document.getElementById("login_button").addEventListener("click", login);
// location.href = "../../dashboard/html/dashboard.html";
// firebase
//   .auth()
//   .signOut()
//   .then(() => {
//     // Sign-out successful.
//   })
//   .catch((error) => {
//     // An error happened.
//   });

// var provider = new firebase.auth.GoogleAuthProvider();

// firebase
//   .auth()
//   .signInWithPopup(provider)
//   .then((result) => {
//     /** @type {firebase.auth.OAuthCredential} */
//     var credential = result.credential;

//     // This gives you a Google Access Token. You can use it to access the Google API.
//     var token = credential.accessToken;
//     // The signed-in user info.
//     var user = result.user;
//     // ...
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // ...
//   });
