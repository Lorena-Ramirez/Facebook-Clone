// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAUOh14htyd0E__e7UYYIpjfXoYbER942g",
  authDomain: "fb-clone-27bf9.firebaseapp.com",
  projectId: "fb-clone-27bf9",
  storageBucket: "fb-clone-27bf9.appspot.com",
  messagingSenderId: "367510675167",
  appId: "1:367510675167:web:c619e0da0fc9ef9d6f536a",
  measurementId: "G-V0RRCHV2J4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;