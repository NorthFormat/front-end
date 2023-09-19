import Logo from '../components/Logo';
import TextField from '../components/TextField';
import ResultField from '../components/ResultField';
import InputSelector from '../components/InputSelector';
import Filter from '../components/Filter';
//import '../css/css-reset.css'
import '../css/color-index.css';
import '../css/app.css';
import {useTheme} from '../hooks/use-theme';
import ColorChoose from '../components/ColorChoose';
import History from '../components/History';
import ConvertButton from '../components/ConvertButton';
import AlterLine from '../components/AlterLine';
import {useEffect, useState} from "react";
import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition";


function FormatterPage() {
    const {transcript, listening} = useSpeechRecognition()

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
            <div className='half'>
                <Logo/>
                <div className='input-block'>
                    <div className='field-button-group'>
                        <TextField setTextFieldState={setTextFieldState}/>
                        <ConvertButton textFieldState={textFieldState}
                                       setTextFieldState={setTextFieldState}
                                       checkBoxesState={checkBoxesState}
                                       setCheckBoxesState={setCheckboxesState}
                        />
                    </div>
                    <AlterLine/>
                    <InputSelector setTextFieldState={setTextFieldState}/>
                </div>

                <Filter checkBoxesState={checkBoxesState} setCheckBoxesState={setCheckboxesState}/>
            </div>
            <div className='half'>
                <ColorChoose darkHandle={handleDarkTheme}
                             lightHandle={handleLightTheme}/>
                <ResultField/>
                <History/>

            </div>
            <button onClick={() => console.log(checkBoxesState)}>Тест</button>
        </div>
    );
}

export default FormatterPage;