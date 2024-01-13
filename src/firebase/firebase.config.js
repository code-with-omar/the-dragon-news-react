// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAoOWkM512ADIWoVhYt8jnWdKEjaxmwpLU",
    authDomain: "the-dragon-news-40358.firebaseapp.com",
    projectId: "the-dragon-news-40358",
    storageBucket: "the-dragon-news-40358.appspot.com",
    messagingSenderId: "1034585367839",
    appId: "1:1034585367839:web:29b5d11fbdb2921ac3bc2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;