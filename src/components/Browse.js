import React from 'react';
import Header from './Header';
import Maincon from "./Maincon"
import Secon   from "./Secon"
import useNowplaying from '../hooks/usenowplaying';
const Browse = () => {
 useNowplaying();
  return (
    <div>
      <Header/>
      <Maincon/>
      <Secon />
    </div>
  )
}

export default Browse; 