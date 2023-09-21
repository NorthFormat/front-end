import DownloadPic from '../assets/images/svg/download.svg'

function DownloadButton({text}) {

    function handleDownloadClick(text){
      // Создаем объект Blob из текста
      const blob = new Blob([text], { type: 'text/plain' });
  
      // Создаем URL для Blob
      const url = window.URL.createObjectURL(blob);
  
      // Создаем элемент <a> для скачивания файла
      const a = document.createElement('a');
      a.href = url;
      a.download = 'myFile.txt';

      a.click();
  
      // Очищаем URL и удаляем элемент <a>
      window.URL.revokeObjectURL(url);
    };
  
    return (
      <div>
        <button onClick={()=> {handleDownloadClick(text)}} className='basic-button'>
          Скачать
          <img src={DownloadPic} alt="" />
          </button>
      </div>
    );
  }
  
  export default DownloadButton;