import React, { useEffect, useState } from 'react';
import StoredNote from './StoredNote';
import { getHistory, deleteNote } from '../hooks/LocalStorageHandler';

export default function History({ updateHistoryNotification, setHistoryNotify }) {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    const storedHistory = localStorage.getItem('history');
    if (storedHistory) {
      const parsedHistory = JSON.parse(storedHistory);
      setHistoryData(parsedHistory);
    }
  }, [updateHistoryNotification]);

  const handleDeleteNote = (position) => {
    deleteNote(position, setHistoryNotify); // Передаем функцию обновления в deleteNote
  };

  // Получите последние 5 элементов или все элементы, если их меньше 5
  const last5Elements = historyData.slice(-5);

  return (
    <div className='history-group'>
      <h3>История исправлений</h3>
      <div id="history-container">
        {last5Elements.map((data, index) => (
          <StoredNote
            key={index}
            data={data}
            positionKey={index}
            updateValue={updateHistoryNotification}
            updateHandler={setHistoryNotify}
            onDelete={() => handleDeleteNote(index)} // Добавляем колбэк для удаления
          />
        ))}
      </div>
    </div>
  );
}