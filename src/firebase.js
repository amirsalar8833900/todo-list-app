import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfVYhGNwPNwgi6wr5_gp6Fk382OtHnadw",
  authDomain: "todo-list-app-cccf9.firebaseapp.com",
  projectId: "todo-list-app-cccf9",
  storageBucket: "todo-list-app-cccf9.appspot.com",
  messagingSenderId: "657689637565",
  appId: "1:657689637565:web:2abaf07bcf7d88630dbdd4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
