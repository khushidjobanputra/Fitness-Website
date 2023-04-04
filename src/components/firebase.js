import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAhuFppBgb-eykAd43SPBfCrFmQrqsw5OE",
  authDomain: "auth-fitness-devlopment.firebaseapp.com",
  projectId: "auth-fitness-devlopment",
  storageBucket: "auth-fitness-devlopment.appspot.com",
  messagingSenderId: "88732915899",
  appId: "1:88732915899:web:8d3555c67329dcdadc319e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};