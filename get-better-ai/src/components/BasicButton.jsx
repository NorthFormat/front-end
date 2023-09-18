import React from 'react';

function BasicButton({ imageSource, onClick, extraClass }) {
  return (
    <button className={`basic-button ${extraClass ? extraClass : ''}`} onClick={onClick}>
      <img src={imageSource} alt="Button" />
    </button>
  );
}

export default BasicButton;