import React, {Component, useEffect, useState} from 'react'
import {useSpeechRecognition} from "react-speech-recognition";

function TextField({setTextFieldState, docText}) {
    const {transcript, listening} = useSpeechRecognition()
    const [value, setValue] = useState(null)

    useEffect(() => {
        handleTextSource()
    }, [listening, transcript, docText])

    const handleTextSource = () => {
        if (listening && transcript) {
            setValue(transcript)
        } else if (docText) {
            setValue(docText)
        } else {
            setValue(null)
        }
    }

    return (
        <>
            <textarea className='text-field'
                      type="text"
                      placeholder='Напишите что-нибудь...'
                      onChange={() => setTextFieldState(true)}
                      value={value}
            />
        </>
    )
}

export default TextField;
