import React from 'react'
import BasicButton from '../components/BasicButton'
import MicPic from '../assets/images/svg/mic.svg'
import DocPic from '../assets/images/svg/document.svg'
import CamPic from '../assets/images/svg/camera.svg'
import Done from '../assets/images/svg/okay.svg'
import Close from '../assets/images/svg/close.svg'
import Equalizer from '../assets/images/svg/716.gif'

function InputSelector() {
  return (
    <>
      <div className='input-selector'>
        <BasicButton imageSource={MicPic} />
        <BasicButton imageSource={DocPic} />
        <BasicButton imageSource={CamPic} />
      </div>
      <div className='input-selector'>
        <BasicButton imageSource={Done} extraClass={'good'}/>
        <img style={{height: '60%'}} src={Equalizer} alt="" />
        <img style={{height: '60%'}} src={Equalizer} alt="" />
        <img style={{height: '60%'}} src={Equalizer} alt="" />
        <BasicButton imageSource={Close} extraClass={'bad'}/>
      </div>
      <div>
        
      </div>
    </>
  );
}

export default InputSelector;