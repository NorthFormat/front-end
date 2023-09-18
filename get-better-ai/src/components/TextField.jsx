import React, {Component, useState} from 'react'
import {useSpeechRecognition} from "react-speech-recognition";

function TextField({ setTextFieldState, value}){
    const { transcript, listening } = useSpeechRecognition()

    return (
        <textarea className='text-field'
                  type="text"
                  placeholder='Напишите что-нибудь...'
                  onChange={() => setTextFieldState(true)}
                  value={listening ? transcript : null}
        />
    )
}

export default TextField;
