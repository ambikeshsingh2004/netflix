import React,{useState,useRef} from 'react'
import Header from "./Header"
import { checkdata } from '../utilities/validate';
const Login = () => {
  const[issign,setissign] = useState(true);
  const[err,seterr] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggle =()=>{
    setissign(!issign);
  };
  const handlebutton = ()=>{
// validating the form data
const msg = checkdata(email.current.value,password.current.value);
seterr(msg)
  };
  return (
    <div >
      <Header/>
      <div className ="absolute">
        <img src ="
https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_small.jpg" alt = "img"/>
      </div>
      <form onSubmit = {(e)=>e.preventDefault()} className="p-12 absolute w-full md:w-1/3  bg-opacity-70 mx-auto my-36 left-0 right-0 flex flex-col text-white rounded-lg bg-black">
      <h1 className = "font-bold text-3xl p-2 ">{issign ? "Sign In" :"Sign Up"}</h1>
       
        {!issign &&  <input type  = "text" placeholder = "User Name" className ="p-2 m-2 bg-slate-600"/>}
        <input type  = "text" 
          ref = {email}
          placeholder = "Email Address" className ="p-2 m-2 bg-slate-600"/>
        <input type  = "text" 
        ref = {password}
        placeholder = "Password" className ="p-2 m-2 bg-slate-600"/>
        <p className='text-red-500 m-2 font-bold text-lg' >{err}</p>
        <button onClick = {()=>{handlebutton()}}className = "p-2 m-2 bg-red-600">{issign ? "Sign In" :"Sign Up"}</button>
        <p className = "m-2 cursor-pointer" onClick={()=>{toggle()}}>{issign ? "New To Netflix? Sign Up Now" :"Already Registerd ? Try Signing In"}</p>

      </form>
      </div>
  )
}

export default Login;