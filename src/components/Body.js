import React ,{useEffect}from 'react'
import Login from "./login"
import Browse from "./Browse"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
//import { onAuthStateChanged } from 'firebase/auth'
//import {auth} from "../utilities/firebase";
//import { useDispatch } from 'react-redux'
//import { adduser, removeuser } from '../utilities/userslice' 
const Body = () => {
// const dispatch = useDispatch(); 
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
  
  return (
    <div>
      <RouterProvider router = {approuter}/>
    </div>
  )
}

export default Body