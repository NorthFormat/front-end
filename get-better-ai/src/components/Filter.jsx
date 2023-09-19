import React, {Component, useEffect} from 'react'
import {checkBoxesStateHandler} from "../hooks/LocalStorageHandler";

function Filter({checkBoxesState, setCheckBoxesState}) {
    return (
        <div className='filter'>
            <label for="checkbox1">
                <input type="checkbox" id="checkbox1" name="checkbox1" value="option1"
                       checked={checkBoxesState.checkBox1.checked}
                       onChange={() => {
                           let newCheckBoxState = {
                               checkBox1: {checked: !checkBoxesState.checkBox1.checked},
                               checkBox2: {checked: checkBoxesState.checkBox2.checked},
                               checkBox3: {checked: checkBoxesState.checkBox3.checked}
                           }
                           checkBoxesStateHandler(newCheckBoxState, setCheckBoxesState)
                       }}/>
                Исправлять грамматические ошибки
            </label>
            <label for="checkbox2">
                <input type="checkbox" id="checkbox2" name="checkbox2" value="option2"
                       checked={checkBoxesState.checkBox2.checked}
                       onChange={() => {
                           let newCheckBoxState = {
                               checkBox1: {checked: checkBoxesState.checkBox1.checked},
                               checkBox2: {checked: !checkBoxesState.checkBox2.checked},
                               checkBox3: {checked: checkBoxesState.checkBox3.checked}
                           }
                           checkBoxesStateHandler(newCheckBoxState, setCheckBoxesState)
                       }}/>
                Структурировать по абзацам
            </label>
            <label for="checkbox3">
                <input type="checkbox" id="checkbox3" name="checkbox3" value="option3"
                       checked={checkBoxesState.checkBox3.checked}
                       onChange={() => {
                           let newCheckBoxState = {
                               checkBox1: {checked: checkBoxesState.checkBox1.checked},
                               checkBox2: {checked: checkBoxesState.checkBox2.checked},
                               checkBox3: {checked: !checkBoxesState.checkBox3.checked}
                           }
                           checkBoxesStateHandler(newCheckBoxState, setCheckBoxesState)
                       }}
                />
                Форматировать текст
            </label>
        </div>
    )
}

export default Filter;