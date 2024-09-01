import React from 'react';
import Header from './Header';
import Maincon from "./Maincon"
import Secon   from "./Secon"
import useNowplaying from '../hooks/usenowplaying';
import Gptsearch from './Gptsearch';
import { useSelector } from 'react-redux';
const Browse = () => {
  // we only want to show gpt search when clicked on that button else hidden
 useNowplaying();
 //above code is a hook for fetching nowplaying movies 
 const showgptsearch = useSelector(store=>store.gpt.showgptsearch);
  return (
    <div className='bg-black'>
      <Header/>
    {showgptsearch? <Gptsearch/>:<><Maincon/>
      <Secon /></>}
      {/* <Gptsearch/>
      <Maincon/>
      <Secon /> */}
    </div>
  )
}

export default Browse; 