import React, {useState} from 'react'
import BasicButton from '../components/BasicButton'
import MicPic from '../assets/images/svg/mic.svg'
import DocPic from '../assets/images/svg/document.svg'
import CamPic from '../assets/images/svg/camera.svg'
import AttachPic from '../assets/images/svg/addFile.svg'
import Done from '../assets/images/svg/okay.svg'
import Close from '../assets/images/svg/close.svg'
import Equalizer from '../assets/images/svg/716.gif'
import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition";
import FileUploadButton from './FileUploadButton'
import FileUpload from './FileUpload'
import FilePreview from './FilePreview'

const SelectorStates = {
    buttons: {1: true, 2: false, 3: false},
    voice: {1: false, 2: true, 3: false},
    document: {1: false, 2: false, 3: true}
}

function InputSelector({ setTextFieldState, setDocText }) {
    const [selectorState, setSelectorState] = useState(SelectorStates.buttons)
    const {transcript, listening, resetTranscript} = useSpeechRecognition()
    const [fileCell, setFile] = useState(<></>);


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
                <FileUploadButton onFileSelect={(selected)=>{
                    setSelectorState(SelectorStates.document);
                    console.log(selected);
                    let component = <FilePreview name={selected.name} type={selected.type}/>
                    setFile(component);
                }} imageSource={DocPic} setDocText={setDocText}/>
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
                {fileCell}
                <BasicButton imageSource={AttachPic} extraClass={'fit'}/>
            </div>
        </>
    );
}

export default InputSelector;