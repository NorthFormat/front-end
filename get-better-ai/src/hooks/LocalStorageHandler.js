export const checkBoxesStateHandler = (checkBoxesStates, setCheckBoxesState) => {
    localStorage.setItem("checkBoxesState", JSON.stringify(checkBoxesStates))
    setCheckBoxesState(checkBoxesStates)
}

export const addNoteToHistory = (note) => {
    let newHistory = JSON.parse(localStorage.getItem("history")) || []; // Если история отсутствует, создаем новый массив
  
    // Добавляем новую запись
    newHistory.push({
      text: note,
      date: new Date(),
    });
  
    // Проверяем, есть ли более 20 записей
    if (newHistory.length > 20) {
      // Если есть более 20 записей, удаляем старые записи
      newHistory = newHistory.slice(newHistory.length - 20);
    }
  
    newHistory = JSON.stringify(newHistory);
    localStorage.setItem("history", newHistory);
  };

export const getHistory = () => {return JSON.parse(localStorage.getItem("history"))}

export const setHistory = () => {
    let startHistory = []
    if (!localStorage.getItem('history')) {
        localStorage.setItem('history', JSON.stringify(startHistory))
    }
}

export const deleteNote = (position) => {
    localStorage.setItem(localStorage.getItem('history').splice(position, 1));
    
}