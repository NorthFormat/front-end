import Transfer from '../assets/images/svg/transfer.svg'
import Spinner from '../assets/images/svg/spinner.svg'
import Okay from '../assets/images/svg/okay.svg'
import Error from "../assets/images/svg/close.svg"
import {useEffect, useState} from 'react';
import {checkBoxesStateHandler} from "../hooks/LocalStorageHandler";

const ButtonStates = {
    active: {pic: Transfer, class: ''},
    loading: {pic: Spinner, class: 'loading'},
    locked: {pic: '', class: 'loading'},
    ready: {pic: Okay, class: 'ready'},
    error: {pic: Error, class: "error"}
}

function ConvertButton({textFieldState, setTextFieldState, checkBoxesState, setCheckBoxesState, setResult, insertedValue}) {
    const [buttonState, setButton] = useState(ButtonStates.active);

    useEffect(() => {
        if (textFieldState) {
            setButton(ButtonStates.active)
        }
    })

    const fakeFetch = async () => {

        const body = {
            text: insertedValue,
            "grammatic": checkBoxesState.checkBox1.checked,
            "paragraph": checkBoxesState.checkBox2.checked,
            "foramt": checkBoxesState.checkBox3.checked
        }

        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(body)
        }

        setTextFieldState(false)

        await setButton(ButtonStates.loading)
        fetch("http://80.249.144.137/changetext")
            .then(response => {
                setTextFieldState(false)
                if (!response.ok) throw response
                return response.text()
            })
            .then(response => {
                setButton(ButtonStates.ready)
                setResult(response)
            })
            .catch((error) => {
                setButton(ButtonStates.error)
                console.log(error)
            })
    }

    return (
        <button className={`basic-button main-button ${buttonState.class}`}
                onClick={() => {
                    fakeFetch()
                            .catch(error => {
                            console.log(error)
                        })
                }}>
            <img src={buttonState.pic} alt=""/>
        </button>
    )
}

export default ConvertButton;