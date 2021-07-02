import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
  apiKey: "AIzaSyDOA8gXMg2IiBWhFwJYDTODpZHUBDns-9g",
  authDomain: "xbl-project.firebaseapp.com",
  databaseURL: "https://xbl-project-default-rtdb.firebaseio.com",
  projectId: "xbl-project",
  storageBucket: "xbl-project.appspot.com",
  messagingSenderId: "395691271949",
  appId: "1:395691271949:web:c6fc7b1b7bbdd2ba4d7244"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
