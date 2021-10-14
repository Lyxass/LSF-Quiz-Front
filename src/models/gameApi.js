export async function getRandomWord(){
    const response = await fetch(process.env.VUE_APP_BACK_END_BASE_URL+"game/random-word", {
        method: 'get', // string or object
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const res = await response.json()
    return res.data
}

export async function getRandomLetter(){
    const response = await fetch(process.env.VUE_APP_BACK_END_BASE_URL+"game/random-letter", {
        method: 'get', // string or object
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const res = await response.json()
    return res.data
}
