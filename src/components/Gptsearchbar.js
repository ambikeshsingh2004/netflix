import React,{useRef} from 'react'
// import Gptsearchbar from "./Gptsearchbar"
// import Gptmoviesuggestion from './Gptmoviesuggestion'
import OpenAI from 'openai';
import lang from "../utilities/language";
import { useSelector } from 'react-redux';
import { OPENAI_KEY } from '../utilities/constant';
import openai from "../utilities/openai"
const Gptsearchbar = () => {
  const searchtext = useRef(null);
  const handlegptsearchclick =async ()=>{
    // searchtext.current.value
    // const client = new OpenAI({
    //   apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
   // });
  //  const openai = new OpenAI({
  //   apiKey: process.env[OPENAI_KEY],
  //   dangerouslyAllowBrowser:true,
  //   // This is the default and can be omitted
  // });
   const query = "Act as a Movie Recommendation syatem and suggest some movies for query" + searchtext.current.value
   + "only give me name of top 5 movies and they must be comma separated in json format"
   ;
    const gptresults = await openai.chat.completions.create({
      messages: [{ role: 'user', content:query }],
      model: 'gpt-3.5-turbo',
    });
    if(!gptresults.choices){
      // return an error element whatever
    }
 console.log(gptresults.choices);
  }
  const langkey = useSelector(store=>store.config.lang);
  return (
    <div className='pt-[20%] flex justify-center'>
     <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
      <input 
      ref ={searchtext}
      type = "text" placeholder={lang[langkey].searchplaceholder} className='p-4 m-2 col-span-8'/>
      <button className=' p-4 m-2 col-span-4 bg-emerald-400 text-white rounded-lg' onClick={()=>{
        handlegptsearchclick();
      }}>{lang[langkey].search}</button>
     </form>
    </div>
  )
}

export default Gptsearchbar