// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import firebase from 'firebase'
import {getAuth , 
    createUserWithEmailAndPassword, 
    // GoogleAuthProvider , 
    // signInWithPopup ,
    // signInWithRedirect, 
    onAuthStateChanged , 
    signOut ,
    signInWithEmailAndPassword
} from "firebase/auth"
import { useEffect, useState } from "react";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqqwi5ekYGzwJcu2jG0sTWmVezRfTB64w",
  authDomain: "logic-f2249.firebaseapp.com",
  projectId: "logic-f2249",
  storageBucket: "logic-f2249.appspot.com",
  messagingSenderId: "72688182352",
  appId: "1:72688182352:web:f88c9d2c45674e9503dd55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();


// signInWithRedirect(auth, provider);

export const signup = (email , password) => {
   return createUserWithEmailAndPassword(auth, email, password)
}

export function useAuth() {
    const [currentUser , setCurrentUser] = useState();
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => { 
            setCurrentUser(user)
        })
        return unsub; // this is how we unmount the Component.
    }, [])
    return currentUser;
}

export function logout() {
    return signOut(auth)
}

export function login(email , password) {
    return signInWithEmailAndPassword(auth, email, password)
}
