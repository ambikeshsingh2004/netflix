import React from 'react'
import Moviecard from './Moviecard'
const Movielist = ({title,movies}) => {
  return (
    <div>
      <div className ="flex  overflow-x-scroll mt-2">
        <h1 className='p-2 font-bold text-white'>{title}</h1>
        <div className ="flex flex-row gap-2">
         {movies?.map((m)=>
           <Moviecard key ={m.id}posterpath ={m.poster_path}/>)}
         
        </div>
      </div>
    </div>
  )
}

export default Movielist