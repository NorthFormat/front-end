import React, { useEffect, useState } from 'react'
import StoredNote from './StoredNote'

export default function History() {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    // Получаем данные из localStorage
    const storedHistory = localStorage.getItem('history');
    if (storedHistory) {
      const parsedHistory = JSON.parse(storedHistory);
      setHistoryData(parsedHistory);
    }
  }, []);

  return (
    <div className='history-group'>
        <h3>История исправлений</h3>
        <div id="history-container">
            {historyData.map((data, index) => (
              <StoredNote key={index} data={data} />
            ))}
        </div>
    </div>
  )
}