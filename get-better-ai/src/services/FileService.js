const API_URL = 'http://localhost:8080/files'

export const upload = (file) => {
    let data = new FormData()
    data.append('file', file)

    const options = {
        method: 'POST',
        body: data,
    };

    return fetch(`${API_URL}/upload`, options)
        .then(response => response.text())
        .then(response => {
            return response
        })
        .catch(error => console.log(error))
}

export const decode = (byteArr) => {
    const decoder = new TextDecoder('utf-8');
    return decoder.decode(byteArr);
}