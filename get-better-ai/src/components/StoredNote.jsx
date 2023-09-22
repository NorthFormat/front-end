import React from 'react'
import ClosePic from '../assets/images/svg/close.svg'
import { deleteNote } from '../hooks/LocalStorageHandler'

export default function StoredNote({positionKey, updateHandler, valueHandler, data}) {

  function formatDateToCustomFormat(dateString) {
    const months = [
      'января', 'февраля', 'марта', 'апреля',
      'мая', 'июня', 'июля', 'августа',
      'сентября', 'октября', 'ноября', 'декабря'
    ];
  
    const date = new Date(dateString);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
  
    const formattedDate = `${day} ${month}, ${hours}:${minutes}`;
    
    return formattedDate;
  }

  function updateHandling(){
    updateHandler(!valueHandler);
  }


  return (
    <div className='stored-note'>
        <div className='meta-note'>
            <h3>{formatDateToCustomFormat(data.date)}</h3>
            <button onClick={()=> {deleteNote(positionKey); updateHandling()}} className='inactive'><img src={ClosePic} alt="" /></button>
        </div>
        
        <div>{data.text}</div>
    </div>
  )
}
