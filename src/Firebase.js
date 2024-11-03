import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyD6ogaY63kSJQuBbWYoxsNo8z9rCySRbvs",
    authDomain: "todo-application-b9393.firebaseapp.com",
    projectId: "todo-application-b9393",
    storageBucket: "todo-application-b9393.appspot.com",
    messagingSenderId: "931492203797",
    appId: "1:931492203797:web:6b5347c9db5b647fca6d1c"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export default app

