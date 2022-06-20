// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyD5GUrzK_CLVR2ZIycGxMdVJb7lpu7JNF8",
   authDomain: "styledcompapp.firebaseapp.com",
   projectId: "styledcompapp",
   storageBucket: "styledcompapp.appspot.com",
   messagingSenderId: "868861874431",
   appId: "1:868861874431:web:5b6fe8a92a9cdd39db7cca",
   measurementId: "G-ZCE9XVHZVS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
