
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDZ-bXvr4h-9fxTBJhHliT00ohMbkE808A",
    authDomain: "webauth-657cb.firebaseapp.com",
    projectId: "webauth-657cb",
    storageBucket: "webauth-657cb.appspot.com",
    messagingSenderId: "1023644114839",
    appId: "1:1023644114839:web:9f81810fc6fdf543feaed2"
});

export default firebaseConfig;