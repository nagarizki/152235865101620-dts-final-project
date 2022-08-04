// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut  } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3NU2R5vt4_TxDSwb-yviBFQ6wmbdJM3E",
  authDomain: "dts-final-project-f89f1.firebaseapp.com",
  projectId: "dts-final-project-f89f1",
  storageBucket: "dts-final-project-f89f1.appspot.com",
  messagingSenderId: "180132695612",
  appId: "1:180132695612:web:69e2f59e2a732a225c3d39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

const registerWithEmailAndPassword = async (email, password)=>{
    try{
        const getUser = await createUserWithEmailAndPassword(auth, email, password);
        console.log(getUser.user);
    }catch(err){
        console.log(err.code);
        console.log(err.message);
    }
};

const loginWithEmailAndPassword = async (email, password)=>{
    try{
        const userLogin = await signInWithEmailAndPassword(auth, email, password);
        console.log(userLogin.user);
    }catch (err){
        console.log(err.code);
        console.log(err.message);
    }
};

const logout = async ()=>{
    try{
        await signOut(auth);
    }catch(err){
        console.log(err.code);
        console.log(err.message);
    }
}

export {
    auth,
    registerWithEmailAndPassword,
    loginWithEmailAndPassword,
    logout,
} 

