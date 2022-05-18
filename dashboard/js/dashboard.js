const firebaseConfig = {
  apiKey: "AIzaSyD-oMWkRdHoz9fUVm_upJy_O9lmGlyQuog",
  authDomain: "kareraportfolio-6f3a7.firebaseapp.com",
  projectId: "kareraportfolio-6f3a7",
  storageBucket: "kareraportfolio-6f3a7.appspot.com",
  messagingSenderId: "666133715543",
  appId: "1:666133715543:web:cb969abf9a8d222cc02112",
  measurementId: "G-Z9M2E9F1D7",
};

const view_profile = document.getElementById("view_profile");
const view_article = document.getElementById("view_article");
const view_comment = document.getElementById("view_comment");
const view_email = document.getElementById("view_email");
const view_subscribers = document.getElementById("view_subscribers");

const dsArticle = document.getElementById("dsArticle");
const dsProfile = document.getElementById("dsProfile");
const dsViewArticle = document.getElementById("dsViewArticle");
const dsComment = document.getElementById("dsComment");
const dsEmail = document.getElementById("dsEmail");
const dsSubscribers = document.getElementById("dsSubscribers");

dsProfile.style.display = "none";
dsArticle.style.display = "block";
dsViewArticle.style.display = "none";
dsComment.style.display = "none";
dsEmail.style.display = "none";
dsSubscribers.style.display = "none";

const article = () => {
  const dsArticle = document.getElementById("dsArticle");
  const dsProfile = document.getElementById("dsProfile");
  const dsViewArticle = document.getElementById("dsViewArticle");
  const dsComment = document.getElementById("dsComment");
  const dsEmail = document.getElementById("dsEmail");
  const dsSubscribers = document.getElementById("dsSubscribers");

  dsProfile.style.display = "none";
  dsArticle.style.display = "block";
  dsViewArticle.style.display = "none";
  dsComment.style.display = "none";
  dsEmail.style.display = "none";
  dsSubscribers.style.display = "none";
};
document.getElementById("create_artile").addEventListener("click", article);

document.getElementById("dsArticle").style.display = "block";
const profile = () => {
  const dsArticle = document.getElementById("dsArticle");
  const dsProfile = document.getElementById("dsProfile");
  const dsViewArticle = document.getElementById("dsViewArticle");
  const dsComment = document.getElementById("dsComment");
  const dsEmail = document.getElementById("dsEmail");
  const dsSubscribers = document.getElementById("dsSubscribers");

  dsProfile.style.display = "block";
  dsArticle.style.display = "none";
  dsViewArticle.style.display = "none";
  dsComment.style.display = "none";
  dsEmail.style.display = "none";
  dsSubscribers.style.display = "none";
};
view_profile.addEventListener("click", profile);

const oldArticles = () => {
  const dsArticle = document.getElementById("dsArticle");
  const dsProfile = document.getElementById("dsProfile");
  const dsViewArticle = document.getElementById("dsViewArticle");
  const dsComment = document.getElementById("dsComment");
  const dsEmail = document.getElementById("dsEmail");
  const dsSubscribers = document.getElementById("dsSubscribers");

  dsProfile.style.display = "none";
  dsArticle.style.display = "none";
  dsViewArticle.style.display = "block";
  dsComment.style.display = "none";
  dsEmail.style.display = "none";
  dsSubscribers.style.display = "none";
};
view_article.addEventListener("click", oldArticles);

const comment = () => {
  const dsArticle = document.getElementById("dsArticle");
  const dsProfile = document.getElementById("dsProfile");
  const dsViewArticle = document.getElementById("dsViewArticle");
  const dsComment = document.getElementById("dsComment");
  const dsEmail = document.getElementById("dsEmail");
  const dsSubscribers = document.getElementById("dsSubscribers");

  dsProfile.style.display = "none";
  dsArticle.style.display = "none";
  dsViewArticle.style.display = "none";
  dsComment.style.display = "block";
  dsEmail.style.display = "none";
  dsSubscribers.style.display = "none";
};
view_comment.addEventListener("click", comment);

const email = () => {
  const dsArticle = document.getElementById("dsArticle");
  const dsProfile = document.getElementById("dsProfile");
  const dsViewArticle = document.getElementById("dsViewArticle");
  const dsComment = document.getElementById("dsComment");
  const dsEmail = document.getElementById("dsEmail");
  const dsSubscribers = document.getElementById("dsSubscribers");

  dsProfile.style.display = "none";
  dsArticle.style.display = "none";
  dsViewArticle.style.display = "none";
  dsComment.style.display = "none";
  dsEmail.style.display = "block";
  dsSubscribers.style.display = "none";
};
view_email.addEventListener("click", email);

const subscription = () => {
  const dsArticle = document.getElementById("dsArticle");
  const dsProfile = document.getElementById("dsProfile");
  const dsViewArticle = document.getElementById("dsViewArticle");
  const dsComment = document.getElementById("dsComment");
  const dsEmail = document.getElementById("dsEmail");
  const dsSubscribers = document.getElementById("dsSubscribers");

  dsProfile.style.display = "none";
  dsArticle.style.display = "none";
  dsViewArticle.style.display = "none";
  dsComment.style.display = "none";
  dsEmail.style.display = "none";
  dsSubscribers.style.display = "block";
};
view_subscribers.addEventListener("click", subscription);
