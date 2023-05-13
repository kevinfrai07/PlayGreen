import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4-D7RyrPcyCB5AGOuFNZ6Xsz_-3kF3zE",
  authDomain: "playgreen-ee1c8.firebaseapp.com",
  projectId: "playgreen-ee1c8",
  storageBucket: "playgreen-ee1c8.appspot.com",
  messagingSenderId: "243052119217",
  appId: "1:243052119217:web:ff29f8ce63db4905424e90"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export default app;
export const db = getFirestore(app);