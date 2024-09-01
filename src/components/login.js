import React,{useState,useRef} from 'react'
import Header from "./Header"
import { checkdata } from '../utilities/validate';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import {auth} from "../utilities/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { adduser } from '../utilities/userslice';
const Login = () => {
  const dispatch = useDispatch ();
  const navigate =  useNavigate();
  const[issign,setissign] = useState(true);
  const[err,seterr] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggle =()=>{
    setissign(!issign);
  };
  const handlebutton = ()=>{
// validating the form data
// checkdata function is defined in utils /validate 
const msg = checkdata(email.current.value,password.current.value);
seterr(msg)
if(msg )return;
 if(!issign){
  //signup logic
  createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // usercredential has user and credentials as object 
    /// we ll need to add these to our store so insted of doing it each time while signing in or signing up 
    //we ll do it in useeffect cause its like eventlistener
    updateProfile(user, {
      displayName: name.current.value, photoURL: "https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-11/Steve%20Smith%20191122%20%282%29.jpg?itok=VG-xHAP6"
    }).then(() => {
      // Profile updated!
      // agar isko user se lete toh updated wala nahi milta warna purana wala milta 
      const{uid,email,displayName,photoURL} =auth.currentUser;
      dispatch(adduser({uid:uid,email:email,displayName:displayName,
        photoURL:photoURL,  
      }));
     // navigate("/browse");
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });
    console.log(user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterr(errorCode + "-" + errorMessage)
    // ..
  });

 }
 else{
  //signin logic
  signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user);
   // navigate("/browse");
   // we did navigate here cause we werent able to navigate from body cause it was in same level with approuter but we are doing it from header now 

   // we can do all routing from onauthstatechange 
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterr(errorCode + "-" + errorMessage);
  });
 }
  };
  return (
    <div  className='min-h-full'>
      <Header/>
      <div className ="absolute">
        <img src ="
https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_small.jpg" alt = "img"/>
      </div>
      <form onSubmit = {(e)=>e.preventDefault()} className="p-12 absolute w-full md:w-1/3  bg-opacity-70 mx-auto my-36 left-0 right-0 flex flex-col text-white rounded-lg bg-black">
      <h1 className = "font-bold text-3xl p-2 ">{issign ? "Sign In" :"Sign Up"}</h1>
       
        {!issign &&  <input type  = "text" 
        ref ={name}
        placeholder = "User Name" className ="p-2 m-2 bg-slate-600"/>}

       {/* above input field will only be shown when its signup form  */}

        <input type  = "text" 
          ref = {email}
          placeholder = "Email Address" className ="p-2 m-2 bg-slate-600"/>
        <input type  = "text" 
        ref = {password}
        placeholder = "Password" className ="p-2 m-2 bg-slate-600"/>
        <p className='text-red-500 m-2 font-bold text-lg' >{err}</p>
      
      {/* above code is for error */}


        <button onClick = {()=>{handlebutton()}}className = "p-2 m-2 bg-red-600">{issign ? "Sign In" :"Sign Up"}</button>

       {/* above button will trigger signup or signin mechanism */}

        <p className = "m-2 cursor-pointer" onClick={()=>{toggle()}}>{issign ? "New To Netflix? Sign Up Now" :"Already Registerd ? Try Signing In"}</p>

      </form>
      </div>
  )
}

export default Login;