// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6u1fRDJT04uxMxgIQvghIrkAEnnnTl0k",
    authDomain: "password-auth-5d291.firebaseapp.com",
    projectId: "password-auth-5d291",
    storageBucket: "password-auth-5d291.appspot.com",
    messagingSenderId: "989368051030",
    appId: "1:989368051030:web:0ecdaec7bae5046c4b22f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;