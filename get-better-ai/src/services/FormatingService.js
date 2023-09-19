const API_URL = 'http://80.249.144.137'

export const changeText = (text, textBoxesState) => {
    const body = {
        text: text,
        "grammatic": textBoxesState.checkBox1.checked,
        "paragraph": textBoxesState.checkBox2.checked,
        "foramt": textBoxesState.checkBox3.checked
    }
    const options = {
        method: 'POST',
        body: JSON.stringify(body)
    }
    return fetch(`${API_URL}/chagetext/`, options)
        .then(response => {
            if (!response.ok) throw response
            response.text()
        })
        .catch(error => {
            console.log(error);
        })
}