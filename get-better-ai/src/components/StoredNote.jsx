import React from 'react'
import ClosePic from '../assets/images/svg/close.svg'

export default function StoredNote({data}) {
  return (
    <div className='stored-note'>
        <div className='meta-note'>
            <h3>{data.date}</h3>
            <button><img src={ClosePic} alt="" /></button>
        </div>
        
        <div>{data.text}</div>
    </div>
  )
}