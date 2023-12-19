
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBaRrsOzR2ptE7uxvD74jGnWr_thVrF-yU",
  authDomain: "myonlinestore-26dbe.firebaseapp.com",
  projectId: "myonlinestore-26dbe",
  storageBucket: "myonlinestore-26dbe.appspot.com",
  messagingSenderId: "877407104990",
  appId: "1:877407104990:web:e035d1619d3208d9f1774f"
};


const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB,auth};