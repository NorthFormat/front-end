import React, {useState} from 'react'
import BasicButton from '../components/BasicButton'
import MicPic from '../assets/images/svg/mic.svg'
import DocPic from '../assets/images/svg/document.svg'
import CamPic from '../assets/images/svg/camera.svg'
import Done from '../assets/images/svg/okay.svg'
import Close from '../assets/images/svg/close.svg'
import Equalizer from '../assets/images/svg/716.gif'
import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition";

const SelectorStates = {
    buttons: {1: true, 2: false, 3: false},
    voice: {1: false, 2: true, 3: false},
    document: {1: false, 2: false, 3: true}
}

function InputSelector({setTextFieldState}) {
    const [selectorState, setSelectorState] = useState(SelectorStates.buttons)
    const {transcript, listening, resetTranscript} = useSpeechRecognition()


    return (
        <>
            <div id='buttons-group' className={`input-selector ${selectorState["1"] ? '' : 'hidden'}`}>
                <BasicButton imageSource={MicPic} onClick={() => {
                    setSelectorState(SelectorStates.voice)
                    setTextFieldState(true)
                    SpeechRecognition.startListening({
                        language: 'ru'
                    })
                    console.log(listening)
                }}/>
                <BasicButton imageSource={DocPic}/>
                <BasicButton imageSource={CamPic}/>
            </div>
            <div id='voice-group' className={`input-selector ${selectorState["2"] ? '' : 'hidden'}`}>
                <BasicButton imageSource={Done} extraClass={'good'} onClick={() => {
                    SpeechRecognition.stopListening()

                    setSelectorState(SelectorStates.buttons);
                }}/>
                <img style={{height: '60%'}} src={Equalizer} alt=""/>
                <img style={{height: '60%'}} src={Equalizer} alt=""/>
                <img style={{height: '60%'}} src={Equalizer} alt=""/>
                <BasicButton imageSource={Close} extraClass={'bad'} onClick={() => {
                    resetTranscript()
                    setSelectorState(SelectorStates.buttons);
                }
                }
                />
            </div>
            <div id='document-group' className={`input-selector ${selectorState["3"] ? '' : 'hidden'}`}>

            </div>
        </>
    );
}

export default InputSelector;