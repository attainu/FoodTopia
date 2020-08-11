import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAvX1iAkdC2h9EGHjDxDrOUKplHS4jhfVk",
  authDomain: "foodtopia-ee954.firebaseapp.com",
  databaseURL: "https://foodtopia-ee954.firebaseio.com",
  projectId: "foodtopia-ee954",
  storageBucket: "foodtopia-ee954.appspot.com",
  messagingSenderId: "888930223349",
  appId: "1:888930223349:web:7207cd1de273c14529f1bc",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
