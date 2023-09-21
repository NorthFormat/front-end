export const checkBoxesStateHandler = (checkBoxesStates, setCheckBoxesState) => {
    localStorage.setItem("checkBoxesState", JSON.stringify(checkBoxesStates))
    setCheckBoxesState(checkBoxesStates)
}

export const addNoteToHistory = (note) => {
    let newHistory = JSON
        .parse(localStorage.getItem("history"))
    console.log(newHistory)
    newHistory.push({
        text: note,
        date: new Date()
    })
    newHistory = JSON.stringify(newHistory)
    localStorage.setItem('history', newHistory)
}

export const getHistory = () => {return JSON.parse(localStorage.getItem("history"))}

export const setHistory = () => {
    let startHistory = []
    if (!localStorage.getItem('history')) {
        localStorage.setItem('history', JSON.stringify(startHistory))
    }
}

export const deleteNote = (position, updateHandler) => {
    localStorage.setItem(getHistory().splice(position, 1));
    console.log("Удален1");
    updateHandler();
}