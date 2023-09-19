import React, { useRef } from 'react';

function FileUpload({ onFileSelect }) {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.name.endsWith('.txt')) {
      // Если выбранный файл - .txt, передаем его родительскому компоненту
      onFileSelect(selectedFile);
    }
    // Сбросить значение поля ввода, чтобы пользователь мог выбрать тот же файл снова
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
      <button onClick={() => fileInputRef.current.click()}>Загрузить .txt файл</button>
    </div>
  );
}

export default FileUpload;
