const API_URL = 'localhost:8080/files'

export const upload = async (file) => {
    let data = new FormData()
    data.append('file', file)

    const options = {
        method: 'POST',
        body: data,
    };

    fetch(`${API_URL}/upload`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(error => console.log(error))
}