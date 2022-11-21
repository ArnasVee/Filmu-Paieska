
const ajaxService = (term)=> {
    const url = "http://www.omdbapi.com/?t=";
    const key = "492c75a0"

    return fetch(`${url}${term}&apikey=${key}`)
        .then(response =>response.json())
}

export default ajaxService