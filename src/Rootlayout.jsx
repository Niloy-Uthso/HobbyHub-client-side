import React, { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Navbar from './components/Navbar';
import { auth } from './firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import toast from 'react-hot-toast';
 export const valueContext=createContext()
const Rootlayout = () => {
     const [currentUser,setCurrentUser]=useState(null)
    
    const [loading,setLoading]=useState(true)
     
    const forceSetCurrentUser = (user) => {
        setCurrentUser({ ...user });
      };
     

    const handlelogin=(email,password)=>{
     
      return  signInWithEmailAndPassword(auth, email, password)
        
 }

  
 const handleregister=(email,password)=>{

  return  createUserWithEmailAndPassword(auth, email, password)
   
 }
      
   
 
 const handlelogout=()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        toast.success('Logged out Successfully!');
      }).catch((error) => {
        // An error happened.
        toast.error(error.message);
      });
 }

 const handleForgetpassword=(email)=>{
  console.log(email)
  toast.success('Reset email sent to your email');
    sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
 }
 
 const handlegooglelogin=()=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  .then((result) => {
    
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

 }

const context={
    handlelogin,
    handleregister,
    loading,
    currentUser,
    handlelogout,
    forceSetCurrentUser,
    handleForgetpassword,
    handlegooglelogin
    
}
// useEffect(() => {
//     AOS.init({
//       duration: 1000, // animation duration in ms
//       once: true,     // animation only happens once
//     });
//   }, []);
//   console.log()
useEffect(()=>{
    
    
     const unsubscribe=   onAuthStateChanged(auth, (user) => {
          
              
            setCurrentUser(user)
            setLoading(false)
            
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const uid = user.uid;
              
              // ...
            } else {
              // User is signed out
              // ...
            }
          })

          return()=>{
            unsubscribe()
          }
    
},[]);

    return (
        <div>

<valueContext.Provider  value={context}>
<Navbar></Navbar>
            <Outlet></Outlet>

</valueContext.Provider>

            
        </div>
    );
};

export default Rootlayout;