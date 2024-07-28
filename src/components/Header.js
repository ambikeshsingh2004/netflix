import React from 'react'
import {useNavigate} from "react-router-dom"
import {auth} from "../utilities/firebase";
import {signOut} from "firebase/auth"
import { useSelector } from 'react-redux';
import store from "../utilities/store"
const Header = () => {
  const user = useSelector((store) =>store.user);
  const navigate = useNavigate();
  const handlesignout = ()=>{
   // const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/")
}).catch((error) => {
  // An error happened.
  navigate("/error");
});
  }
  return (
    <div className = " w-screen absolute bg-gradient-to-b from-black bg-gradient-to-r from-black z-10 flex justify-between">
   <img src = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt = "logo" className = "w-48" />
   {user && 
   <div className ="flex p-2">
   <img src ={user?.photoURL} alt = "user" className = "w-8 h-8 mt-4 mr-3"/>
   <button className ="font-bold" onClick = {()=>{handlesignout();}}>Sign Out</button>
  </div>}

    </div>
  )
}

export default Header;