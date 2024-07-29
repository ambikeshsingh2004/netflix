import {useEffect}from 'react'
import {options} from "../utilities/constant"
import { addtrailervideo } from '../utilities/movieslice'
import { useDispatch } from 'react-redux'

const useTrailer = (mid)=>{
  
  const dispatch = useDispatch();

  const getvid = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/'+ mid  +'/videos?language=en-US', options);
    const json = await data.json();
    console.log(json);
    const filterdata = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterdata.length ? filterdata[0]:json.results[0];
    console.log(trailer); 
    dispatch(addtrailervideo(trailer));
   }
  useEffect(()=>{
    getvid();
  },[])
}
export default useTrailer;