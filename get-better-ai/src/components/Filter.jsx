import React, { Component } from 'react'

function Filter() {
    return (
        <div className='filter'>
        <label for="checkbox1">
          <input type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
          Опция 1
        </label>
        <label for="checkbox2">
          <input type="checkbox" id="checkbox2" name="checkbox2" value="option2" />
          Опция 2
        </label>
        <label for="checkbox3">
          <input type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
          Опция 3
        </label>
      </div>
    )
}

export default Filter;