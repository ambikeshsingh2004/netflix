import React from 'react'

const Videot = ({title,overview}) => {
  return (
    <div className='pt-[20%] px-16 absolute bg-gradient-to-r from-black w-screen aspect-video'>
      <h1 className ="text-4xl font-bold p-2 text-white">{title}</h1>
      <p className ="w-2/5 text-lg py-6 text-white">{overview}</p>
      <div >
        <button className='bg-black text-white px-8 py-2 rounded-lg'>Play</button>
        <button className="bg-gray-400 text-white ml-2 px-8 py-2 rounded-lg">More Info</button>
      </div>
    </div>
  ) 
}

export default Videot