
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4nk9rru_jqpcu63GrUDeqmS0YCp0r_Nc",
  authDomain: "users-29ae7.firebaseapp.com",
  projectId: "users-29ae7",
  storageBucket: "users-29ae7.firebasestorage.app",
  messagingSenderId: "1083976760553",
  appId: "1:1083976760553:web:75f3c550c981c6b9f34478"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

export { app, auth }; 
