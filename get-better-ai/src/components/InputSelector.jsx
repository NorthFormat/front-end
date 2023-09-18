import React from 'react'
import BasicButton from '../components/BasicButton'
import MicPic from '../assets/images/svg/mic.svg'
import DocPic from '../assets/images/svg/document.svg'
import CamPic from '../assets/images/svg/camera.svg'

function InputSelector() {
  return (
    <div className='input-selector'>
      <BasicButton imageSource={MicPic} />
      <BasicButton imageSource={DocPic} />
      <BasicButton imageSource={CamPic} />
    </div>
  );
}

export default InputSelector;