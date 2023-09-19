import React, {useEffect, useState} from 'react'

function ResultField({resultResponse}) {
    const [result, setResult] = useState();

    useEffect(() => {
        setResult(resultResponse);
    }, [resultResponse]);


    // function addToHistory(newNote) {
    //     let newHistory = JSON.parse(localStorage.getItem('history'))
    //     localStorage.setItem('history', JSON.stringify(newHistory));
    // }

    return (
        <div className='text-field'>
            {result ? result : <></>}
        </div>
    )
}

export default ResultField;