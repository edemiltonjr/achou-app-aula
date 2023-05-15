// Import the functions you need from the SDKs you need
import { deleteApp, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIHW5gA7N8wTwz18232KpFDkRqfMwLDQM",
  authDomain: "achou-app-aula.firebaseapp.com",
  projectId: "achou-app-aula",
  storageBucket: "achou-app-aula.appspot.com",
  messagingSenderId: "136812349354",
  appId: "1:136812349354:web:c7fd4c2563bea270124dd3"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;