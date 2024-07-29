import React from 'react'
// import Gptsearchbar from "./Gptsearchbar"
// import Gptmoviesuggestion from './Gptmoviesuggestion'
import lang from "../utilities/language";
import { useSelector } from 'react-redux';

const Gptsearchbar = () => {
  const langkey = useSelector(store=>store.config.lang);
  return (
    <div className='pt-[20%] flex justify-center'>
     <form className='w-1/2 bg-black grid grid-cols-12'>
      <input type = "text" placeholder={lang[langkey].searchplaceholder} className='p-4 m-2 col-span-8'/>
      <button className=' p-4 m-2 col-span-4 bg-emerald-400 text-white rounded-lg'>{lang[langkey].search}</button>
     </form>
    </div>
  )
}

export default Gptsearchbar