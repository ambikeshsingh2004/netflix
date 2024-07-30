import {useEffect}from 'react'
import {options} from "../utilities/constant"
import { addtrailervideo } from '../utilities/movieslice'
import { useDispatch, useSelector } from 'react-redux'

const useTrailer = (mid)=>{
  
  const dispatch = useDispatch();
   const trailer = useSelector(store=>store.movies.nowpalying);
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
    if(!trailer)
      // here we are making sure if now trailer are not there only then make api calls 
    //do the same with usenowplaying movies hook  
    getvid();
  },[])
}
export default useTrailer;