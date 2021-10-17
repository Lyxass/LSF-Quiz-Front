const fetch = require("node-fetch")

export async function getRandomFromApi(url){
    const response = await fetch(url, {
        method: 'get', // string or object
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const res = await response.json()
    return res.data
}
