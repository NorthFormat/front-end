import React, {useRef} from 'react';
import {upload} from "../services/FileService";

function FileUploadButton({onFileSelect, imageSource, extraClass, setDocText}) {
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile && selectedFile.name.endsWith('.docx')) {
            setDocText(upload(selectedFile)
                .catch(error => {
                    console.log(error)
                }))

            onFileSelect(selectedFile);
        }
        fileInputRef.current.value = '';
    };

    return (
        <div>
            <input
                type="file"
                ref={fileInputRef}
                accept=".docx"
                style={{display: 'none'}}
                onChange={handleFileChange}
            />
            <button className={`basic-button ${extraClass ? extraClass : ''}`}
                    onClick={() => fileInputRef.current.click()}>
                <img src={imageSource} alt=""/>
            </button>
        </div>
    );
}

export default FileUploadButton;
