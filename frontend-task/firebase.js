import {initializeApp} from 'firebase/app';
import {getDatabase} from "firebase/database";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyABVk5mM5ny0ZuwMguvnHG5iBE39rOEOU8",
    authDomain: "car-parts-b1a11.firebaseapp.com",
    databaseURL: "https://car-parts-b1a11-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "car-parts-b1a11",
    storageBucket: "car-parts-b1a11.appspot.com",
    messagingSenderId: "1012771696073",
    appId: "1:1012771696073:web:587c39799e05c8acf6cc18"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();
