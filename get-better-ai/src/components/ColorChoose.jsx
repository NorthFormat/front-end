import React from 'react'

function ColorChoose({darkHandle, lightHandle}) {
    return (
        <div className='color-pick'>
            <h4>Цветовая схема :</h4>
            <button id="dark-btn" onClick={darkHandle}></button>
            <button id="light-btn" onClick={lightHandle}></button>
        </div>
    )
}

export default ColorChoose;