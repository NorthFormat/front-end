import React, { Component } from 'react'

function TextField({ setTextFieldState }){
    return (
        <textarea className='text-field'
                  type="text"
                  placeholder='Напишите что-нибудь...'
                  onChange={() => setTextFieldState(true)
        }/>
    )
}

export default TextField;
