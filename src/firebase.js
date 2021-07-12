// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCf3zV1u3Puwi8lW4Re7LsJh4xBUvl5Bwg",
  authDomain: "facebook-clone-18d77.firebaseapp.com",
  projectId: "facebook-clone-18d77",
  storageBucket: "facebook-clone-18d77.appspot.com",
  messagingSenderId: "1031970594601",
  appId: "1:1031970594601:web:74a416e5dc26f202b2e138",
  measurementId: "G-BEC8BRJ2HW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;