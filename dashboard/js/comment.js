console.log("hello");

const firebaseConfig = {
  apiKey: "AIzaSyD-oMWkRdHoz9fUVm_upJy_O9lmGlyQuog",
  authDomain: "kareraportfolio-6f3a7.firebaseapp.com",
  projectId: "kareraportfolio-6f3a7",
  storageBucket: "kareraportfolio-6f3a7.appspot.com",
  messagingSenderId: "666133715543",
  appId: "1:666133715543:web:cb969abf9a8d222cc02112",
  measurementId: "G-Z9M2E9F1D7",
};
console.log(firebase);
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const comment = (e) => {
  e.preventDefault();
  const commentName = document.getElementById("comment_name").value;
  const commentText = document.getElementById("comment_text").value;

  db.collection("comment")
    .add({
      name: commentName,
      comment: commentText,
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
document.getElementById("comment_button").addEventListener("click", comment);
