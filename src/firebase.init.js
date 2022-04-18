import { getAuth } from 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtoLrqBb7LQEWJwQJf0do-UwDQAk3goas",
  authDomain: "food-e6e09.firebaseapp.com",
  projectId: "food-e6e09",
  storageBucket: "food-e6e09.appspot.com",
  messagingSenderId: "495203889633",
  appId: "1:495203889633:web:5acf719b39d0ef3bbce2a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;