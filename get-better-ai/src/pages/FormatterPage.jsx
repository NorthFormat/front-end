import Logo from '../components/Logo';
import TextField from '../components/TextField';
import ResultField from '../components/ResultField';
import InputSelector from '../components/InputSelector';
import Filter from '../components/Filter';
//import '../css/css-reset.css'
import '../css/color-index.css';
import '../css/app.css';
import '../css/equalizer.css'
import {useTheme} from '../hooks/use-theme';
import ColorChoose from '../components/ColorChoose';
import History from '../components/History';
import ConvertButton from '../components/ConvertButton';
import AlterLine from '../components/AlterLine';
import {useEffect, useState} from "react";
import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition";


function FormatterPage() {
    const {transcript, listening} = useSpeechRecognition()
    const [docText, setDocText] = useState(null)
    const [resultResp, setResultField] = useState('')
    const [changedText, setChangedText] = useState(null)
    const [insertedValue, setInsertedValue] = useState('')

    const [RightHalfActive, setHalfActive] = useState(false);
    const [textFieldState, setTextFieldState] = useState(true)
    const [checkBoxesState, setCheckboxesState] = useState({
        checkBox1: {checked: true},
        checkBox2: {checked: true},
        checkBox3: {checked: true}
    })
    const [record, setRecord] = useState(listening)
    // const [fileText, setFileText] = useState(null)

    const {theme, setTheme} = useTheme();

    useEffect(() => {
        localStorage.getItem("checkBoxesState")
            ? setCheckboxesState(JSON.parse(localStorage.getItem("checkBoxesState")))
            : setCheckboxesState({
                checkBox1: {checked: true},
                checkBox2: {checked: true},
                checkBox3: {checked: true}
            })
    }, [])

    const handleLightTheme = () => {
        setTheme('light')
    };
    const handleDarkTheme = () => {
        setTheme('dark')
    };


    return (
        <div className='split-container'>
            <div className={`half ${RightHalfActive ? '' : 'half-active'}`} onClick={()=>{setHalfActive(false)}}>
                <div className={RightHalfActive ? 'cover': 'none'}></div>
                <Logo/>
                <div className='input-block'>
                    <div className='field-button-group'>
                        <TextField setTextFieldState={setTextFieldState} docText={docText} setInsertedValue={setInsertedValue}/>
                        <ConvertButton textFieldState={textFieldState}
                                       setTextFieldState={setTextFieldState}
                                       checkBoxesState={checkBoxesState}
                                       setCheckBoxesState={setCheckboxesState}
                                       setResult={setResultField}
                                       insertedValue={insertedValue}
                        />
                    </div>
                    <AlterLine/>
                    <InputSelector setTextFieldState={setTextFieldState} setDocText={setDocText}/>
                </div>

                <Filter checkBoxesState={checkBoxesState} setCheckBoxesState={setCheckboxesState}/>
            </div>
            <div className={`half ${RightHalfActive ? 'half-active' : ''}`} onClick={()=>{setHalfActive(true)}}>
                <div className={RightHalfActive ? 'none': 'cover'}></div>
                <ColorChoose darkHandle={handleDarkTheme}
                             lightHandle={handleLightTheme}/>
                <ResultField resultResponse={resultResp}/>
                <History/>

            </div>
            {/*<div onClick={() => {*/}
            {/*    console.log(insertedValue)}}>Test</div>*/}
        </div>
    );
}

export default FormatterPage;