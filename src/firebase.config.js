// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZVLJu1yqsHBpNWF-5TuY4iinpheD7m2Q",
  authDomain: "text-search-ca19f.firebaseapp.com",
  databaseURL: "https://text-search-ca19f-default-rtdb.firebaseio.com",
  projectId: "text-search-ca19f",
  storageBucket: "text-search-ca19f.appspot.com",
  messagingSenderId: "12600036695",
  appId: "1:12600036695:web:aef224d2f3f9efdbea4212"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
