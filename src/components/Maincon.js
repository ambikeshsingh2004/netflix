import React from 'react'
import { useSelector } from 'react-redux';
import Videot from "./Videot"
import Videob from "./Videob"
const Maincon = () => {
  const movies = useSelector(store=>store.movies?.nowplayingmovies);
  if(!movies)return;
  
  const mmovie = movies[0];
  const{original_title,overview,id} = mmovie;
  console.log(mmovie);
  return (
    <div>
      <Videot title ={original_title} overview = {overview}/>
      <Videob mid = {id}/>
    </div>
  )
}

export default Maincon