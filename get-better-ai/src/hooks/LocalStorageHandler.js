export const checkBoxesStateHandler = async (checkBoxesStates) => {
    await localStorage.setItem("checkBoxesState", JSON.stringify(checkBoxesStates))
}