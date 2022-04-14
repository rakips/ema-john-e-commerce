// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtK4A2st5pVlXPE7_xkcGYtslBR12984g",
    authDomain: "ema-john-simple-14ba0.firebaseapp.com",
    projectId: "ema-john-simple-14ba0",
    storageBucket: "ema-john-simple-14ba0.appspot.com",
    messagingSenderId: "571937921495",
    appId: "1:571937921495:web:af31ecd63f5f70c6fd5392"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;