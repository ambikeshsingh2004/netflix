import React from 'react'
import {img_cdn} from '../utilities/constant'
const Moviecard = ({posterpath}) => {
  return (
    <div className='w-32'>
      <img src ={img_cdn + posterpath} alt ="poster"/>
    </div>
  )
}

export default Moviecard