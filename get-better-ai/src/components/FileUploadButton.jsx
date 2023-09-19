import React, { useRef } from 'react';

function FileUploadButton({ onFileSelect, imageSource, extraClass }) {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.name.endsWith('.txt')) {
        onFileSelect(selectedFile);
    }
    fileInputRef.current.value = '';
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        accept=".txt"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <button className={`basic-button ${extraClass ? extraClass : ''}`} onClick={() => fileInputRef.current.click()}>
        <img src={imageSource} alt="" />
      </button>
    </div>
  );
}

export default FileUploadButton;
