// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzzsoKrRzUt3WBLXLaOhp6bBBWfA6hWoI",
  authDomain: "insta-clone-161e5.firebaseapp.com",
  projectId: "insta-clone-161e5",
  storageBucket: "insta-clone-161e5.appspot.com",
  messagingSenderId: "137740741545",
  appId: "1:137740741545:web:afa794a3c757741c4772b8",
  measurementId: "G-904P51E63D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
// const analytics = getAnalytics(app);