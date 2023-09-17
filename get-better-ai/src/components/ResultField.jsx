import React, { useState } from 'react'

function ResultField() {
    const [result, setResult] = useState(0);

    return (
        <div className='text-field'>
            { result }
        </div>
    )
}

export default ResultField;