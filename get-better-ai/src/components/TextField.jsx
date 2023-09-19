import React, {Component, useState} from 'react'
import {useSpeechRecognition} from "react-speech-recognition";

function TextField({ setTextFieldState, docText}) {
    const { transcript, listening } = useSpeechRecognition()

    const handleValue = () => {
        if (listening && transcript) {
            return transcript
        }
        if (docText !== '' && !docText) {
            return docText
        }
        return null
    }

    return (
        <textarea className='text-field'
                  type="text"
                  placeholder='Напишите что-нибудь...'
                  onChange={() => setTextFieldState(true)}
                  value={handleValue}
        />
    )
}

export default TextField;
