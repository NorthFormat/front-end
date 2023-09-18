import React from 'react'
import StoredNote from './StoredNote'

export default function History() {
  return (
    <div className='history-group'>
        <h3>История исправлений</h3>
        <div id="history-container">
            <StoredNote data={{date:"14 сентября 2023, 15:34", text:"Привет!"}} />
            <StoredNote data={{date:"14 сентября 2023, 15:34", text:"Привет!"}} />
            <StoredNote data={{date:"14 сентября 2023, 15:34", text:"Привет!"}} />
            <StoredNote data={{date:"14 сентября 2023, 15:34", text:"Привет!"}} />
        </div>
    </div>
  )
}
