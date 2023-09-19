import React, {Component, useEffect, useState} from 'react'
import {useSpeechRecognition} from "react-speech-recognition";

function TextField({setTextFieldState, docText, setInsertedValue}) {
    const {transcript, listening} = useSpeechRecognition()
    const [value, setValue] = useState(null)

    useEffect( () => {
        handleTextSource()
    }, [transcript, listening, docText])

    const handleTextSource = () => {
        if (listening && transcript) {
            setValue(transcript)
            setInsertedValue(transcript)
        } else if (docText) {
            setValue(docText)
            setInsertedValue(docText)
        } else {
            setValue(null)
        }
    }

    return (
        <>
            <textarea className='text-field'
                      type="text"
                      placeholder='Напишите что-нибудь...'
                      onChange={(e) => {
                          setTextFieldState(true)
                          setInsertedValue(e.target.value)
                      }}
                      value={value}
            />
        </>
    )
}

export default TextField;
