import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyB9ZRm7nXLnEEr2DNj8zFS1MytHHlgA6NQ",
  authDomain: "practice-f7ca6.firebaseapp.com",
  databaseURL: "https://practice-f7ca6.firebaseio.com",
  projectId: "practice-f7ca6",
  storageBucket: "practice-f7ca6.appspot.com",
  messagingSenderId: "1073048712791",
  appId: "1:1073048712791:web:bda696436e8e0cff"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()

  export default db

  