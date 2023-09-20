import React, {useEffect, useState} from 'react'
import StoredNote from './StoredNote'
import {getHistory} from "../hooks/LocalStorageHandler";

export default function History({updateHistoryHandle}) {
    const [historyData, setHistoryData] = useState([]);

    useEffect(() => {
        const storedHistory = getHistory()
        setHistoryData(storedHistory)
    }, []);

    return (
        <div className='history-group'>
            <h3>История исправлений</h3>
            <div id="history-container">
                {historyData.map((note, index) => (
                    <StoredNote key={index} data={note}/>
                    ))}
            </div>
        </div>
    )
}