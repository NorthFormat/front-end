import React from 'react';
import BasicButton from '../components/BasicButton';
import MicPic from '../assets/images/svg/mic.svg';

function InputSelector() {
  return (
    <div className='input-selector'>
      <BasicButton imageSource={MicPic} />
      <BasicButton imageSource={MicPic} />
      <BasicButton imageSource={MicPic} />
    </div>
  );
}

export default InputSelector;