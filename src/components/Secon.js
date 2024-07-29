import React from 'react'
import Movielist from './Movielist'
import { useSelector } from 'react-redux'
const Secon = () => {
  //
  const movies = useSelector(store => store.movies);    
  // popular,trending,horror,comedy
  return (
    <div className =" " >
      <div className ="-mt-52 z-20 relative bg-transparent">
      <Movielist title ={"Now Playing"} movies = {movies?.nowplayingmovies} />
      <Movielist title ={"Now Playing"} movies = {movies?.nowplayingmovies} />
      <Movielist title ={"Now Playing"} movies = {movies?.nowplayingmovies} />
      <Movielist title ={"Now Playing"} movies = {movies?.nowplayingmovies} />
      <Movielist title ={"Now Playing"} movies = {movies?.nowplayingmovies} />
      </div>
    </div>
  )
}

export default Secon