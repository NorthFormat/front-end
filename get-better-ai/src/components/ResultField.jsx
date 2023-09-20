import React, {useEffect, useState} from 'react'

function ResultField({resultResponse}) {
    const [result, setResult] = useState();

    useEffect(() => {
        setResult(resultResponse);
        addToHistory(resultResponse);
    }, [resultResponse]);

    function addToHistory(newNote) {
        let newHistory = JSON.parse(localStorage.getItem('history3'))
        let time = new Date()
        let note = {
            date: time,
            text: newNote.text
        }
        note = JSON.stringify(note);
    }

    return (
        <div className='text-field'
             dangerouslySetInnerHTML={{__html: resultResponse}}>
        </div>
    )
}

export default ResultField;