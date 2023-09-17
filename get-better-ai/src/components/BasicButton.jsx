import React from 'react';

function BasicButton({ imageSource, onClick }) {
  return (
    <button className='basic-button' onClick={onClick}>
      <img src={imageSource} alt="Button" />
    </button>
  );
}

export default BasicButton;