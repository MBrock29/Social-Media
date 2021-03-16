import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDm8mVoNWJyLRlzGmaPwNlbWqag7cE8jtc",
    authDomain: "social-media-1501b.firebaseapp.com",
    projectId: "social-media-1501b",
    storageBucket: "social-media-1501b.appspot.com",
    messagingSenderId: "595981738228",
    appId: "1:595981738228:web:3d6e0b446eda40eae07ea1",
    measurementId: "G-6GC00NWKFH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  const auth = firebase.auth()
  const storage = firebase.storage()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {db, auth, storage, provider}