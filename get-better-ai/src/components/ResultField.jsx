import React, { useEffect, useState } from 'react'

function ResultField({resultResponse}) {
    const [result, setResult] = useState();

    useEffect(()=>{setResult(resultResponse);
                    addToHistory(resultResponse);
                    }, [resultResponse]);


    function addToHistory(newNote){
        localStorage.setItem('history', [localStorage.getItem('history'), newNote]);
    }

    return (
        <div className='text-field'>
            { result }
        </div>
    )
}

export default ResultField;