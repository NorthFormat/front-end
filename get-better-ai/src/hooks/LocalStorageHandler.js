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

export const deleteNote = (position, updateHandler) => {
  let strge = localStorage.getItem('history');
  if (strge) {
    let data = JSON.parse(strge);
    if (data[position]) {
      console.log(`Удален ${position} элемент : ${data[position].text}`);
      data.splice(position, 1);
      localStorage.setItem('history', JSON.stringify(data));
      if (typeof updateHandler === 'function') {
        updateHandler(true); // Вызываем обновление истории, только если updateHandler является функцией
      }
    } else {
      console.error(`Попытка удалить несуществующий элемент с позицией ${position}`);
    }
  }
}