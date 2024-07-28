import React ,{useEffect}from 'react'
import Login from "./login"
import Browse from "./Browse"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from "../utilities/firebase";
import { useDispatch } from 'react-redux'
import { adduser, removeuser } from '../utilities/userslice' 
const Body = () => {
 const dispatch = useDispatch(); 
 //const navigate =  useNavigate();
  const approuter = createBrowserRouter([
    {
      path:"/",
      element:<Login/>,
    },
    {
      path:"/browse",
      element:<Browse />,
    }
  ]);
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        // for sign up,signin
        const{uid,email,displayName,photoURL} =user;
        dispatch(adduser({uid:uid,email:email,displayName:displayName,
          photoURL:photoURL,  
        }));
       // navigate("/browse");
      }
      else {
      // for signout
      dispatch(removeuser());
     // navigate("/");
      }
    })
  },[])
  return (
    <div>
      <RouterProvider router = {approuter}/>
    </div>
  )
}

export default Body