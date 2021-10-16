
import initializAuthintication from './../firebase/firebase.ini';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup,createUserWithEmailAndPassword   } from "firebase/auth";

import { useState } from 'react';

initializAuthintication()

const useFirebase=()=>{
        const [user,setUser]=useState({});
        // Email
        const[email,setEmail]=useState('');
        const [password,setPassword]=useState('')

const GoogleProvider=new GoogleAuthProvider();
const auth=getAuth();

    const GoogleSignIn=()=>{
        signInWithPopup(auth,GoogleProvider)
        .then(data=>setUser(data));
        console.log(user)
    };

    // Email 
    const handleRegistaton=(e)=>{
        console.log(email,password);
    createUserWithEmailAndPassword(auth,email,password)
    .then(result=>{
        const user=result.user;
        console.log(user)
    })

        e.preventDefault()
    }
    // Handle Email
    const handleEmailChange=(e)=>{
           setEmail(e.target.value)
    }

    // Password change
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value)
    }
    // Email Validation


    return{

        user,
        GoogleSignIn,
        handleRegistaton,
        handleEmailChange,
        handlePasswordChange,
    }


};


export default useFirebase;