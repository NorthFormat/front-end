import React, {useEffect, useState} from 'react'

function ResultField({resultResponse}) {
    return (
        <div className='text-field'
             dangerouslySetInnerHTML={{__html: resultResponse}}>
        </div>
    )
}

export default ResultField;