import React, { useEffect, useState } from 'react'
import StoredNote from './StoredNote'
import { getHistory } from '../hooks/LocalStorageHandler';

export default function History({updateHistoryNotification}) {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    const storedHistory = localStorage.getItem('history');
    if (storedHistory) {
      const parsedHistory = JSON.parse(storedHistory);
      setHistoryData(parsedHistory);
    }
  }, [updateHistoryNotification]);

  return (
    <div className='history-group'>
        <h3>История исправлений</h3>
        <div id="history-container">
            { 
              historyData.slice(-5).map((data, index) => (
              <StoredNote key={index} data={data} positionKey={historyData.length - 5 + index}/>
            ))}
        </div>
    </div>
  )
}