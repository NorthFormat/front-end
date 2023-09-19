import React from 'react'
import Document from '../assets/images/svg/document.svg'
import Delete from '../assets/images/svg/close.svg'

export default function FilePreview({name, type}) {
    function setByType(type){
        var img;
        switch(type){
            case 'text/plain': img = Document
            case '':
            case '':
            default: img = Document
        }
        return img;
    }
  return (
    <div className='attachment'>
        <img src={setByType(type)}/>
        <h3>{name}</h3>
        <button>
          <img src={Delete} alt="" />
        </button>
    </div>
  )
}
