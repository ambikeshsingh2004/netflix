import { useDispatch } from 'react-redux';
import {addnowplayingmovies} from "../utilities/movieslice"
import {options} from "../utilities/constant"
import { useEffect } from 'react';

const useNowplaying = ()=>{

  const dispatch = useDispatch();
  const nowplaying = async () => {
  const data = await  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
    const json =await data.json();
    console.log(json.results);
    dispatch(addnowplayingmovies(json.results));
}
useEffect(()=>{
 nowplaying();
},[]);
};
export default useNowplaying  ;