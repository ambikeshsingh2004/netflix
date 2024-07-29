import React ,{useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import {auth} from "../utilities/firebase";
import {signOut} from "firebase/auth"
import { useSelector } from 'react-redux';
import store from "../utilities/store"
import { onAuthStateChanged } from 'firebase/auth'
//import {auth} from "../utilities/firebase";
import { useDispatch } from 'react-redux'
import { adduser, removeuser } from '../utilities/userslice'
//import { useEffect } from "react"
const Header = () => {
  const user = useSelector((store) =>store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlesignout = ()=>{
   // const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
  //navigate("/")
}).catch((error) => {
  // An error happened.
  navigate("/error");
});
  }
  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth,(user)=>{
      if(user){
        // for sign up,signin
        const{uid,email,displayName,photoURL} =user;
        dispatch(adduser({uid:uid,email:email,displayName:displayName,
          photoURL:photoURL,  
        }));
        // if user is logged in redirect to 
        // browse page 
        // onauthstatechnage returnns a function which will be called when components unmount to remove this event listener 
        navigate("/browse");
      }
      else {
      // for signout
      // if user is logged out redirect to home page 
      dispatch(removeuser());
      navigate("/");
      }
    })
    return ()=>{ 
      //unsubscribe is function returned by on authstaechanged which will clear it when component is unmounted  
   unsubscribe();
     }
  },[])
  return (
    <div className = " w-screen absolute bg-gradient-to-b from-black bg-gradient-to-r from-black z-10 flex justify-between">
   <img src = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt = "logo" className = "w-48" />
   {user && 
   <div className ="flex p-2">
   <img src = {user?.photoURL} alt = "user" className = "w-8 h-8 mt-4 mr-3"/>
   <button className ="font-bold text-white" onClick = {()=>{handlesignout();}}>Sign Out</button>
  </div>}

    </div>
  )
}

export default Header;