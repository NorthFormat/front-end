import Logo from '../components/Logo';
import TextField from '../components/TextField';
import ResultField from '../components/ResultField';
import InputSelector from '../components/InputSelector';
import Filter from '../components/Filter';
//import '../css/css-reset.css'
import '../css/color-index.css';
import '../css/app.css';
import { useTheme } from '../hooks/use-theme';
import ColorChoose from '../components/ColorChoose';
import History from '../components/History';
import ConvertButton from '../components/ConvertButton';
import AlterLine from '../components/AlterLine';
import {useState} from "react";


function FormatterPage() {
  const [textFieldState, setTextFieldState] = useState(true)

  const { theme, setTheme } = useTheme();
  
  const handleLightTheme = () => {setTheme('light')};
  const handleDarkTheme = () => {setTheme('dark')};


  return (
    <div className='split-container'>
      <div className='half'>
        <Logo />
        <div className='input-block'>
          <div className='field-button-group'>
            <TextField setTextFieldState={setTextFieldState}/>
            <ConvertButton textFieldState={textFieldState} setTextFieldState={setTextFieldState}/>
          </div>
          <AlterLine />
          <InputSelector />
        </div>
        
        <Filter />
      </div>
      <div className='half'>
        <ColorChoose darkHandle={handleDarkTheme}
                    lightHandle={handleLightTheme}/>
        <ResultField />
        <History />
      </div>
    </div>
  );
}

export default FormatterPage;