// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyA01xlvPV9N5BYgElrOrqFsjgmHMNHPub0",
  authDomain: "hotelapp-d3e13.firebaseapp.com",
  projectId: "hotelapp-d3e13",
  storageBucket: "hotelapp-d3e13.appspot.com",
  messagingSenderId: "343698326411",
  appId: "1:343698326411:web:40453b613c56b8231a258e",
  measurementId: "G-BPQGMDFJ9R"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const db = getFirestore(app)

export {auth, db}