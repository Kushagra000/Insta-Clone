
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyDzzsoKrRzUt3WBLXLaOhp6bBBWfA6hWoI",
  authDomain: "insta-clone-161e5.firebaseapp.com",
  projectId: "insta-clone-161e5",
  storageBucket: "insta-clone-161e5.appspot.com",
  messagingSenderId: "137740741545",
  appId: "1:137740741545:web:afa794a3c757741c4772b8",
  measurementId: "G-904P51E63D"
};

const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export {app, auth, firestore, storage};