export const checkBoxesStateHandler = (checkBoxesStates, setCheckBoxesState) => {
    localStorage.setItem("checkBoxesState", JSON.stringify(checkBoxesStates))
    setCheckBoxesState(checkBoxesStates)
}