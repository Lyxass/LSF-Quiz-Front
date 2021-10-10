export async function getRandomWord(){

    console.log(process.env.VUE_APP_BACK_END_BASE_URL+"game/random")
    const response = await fetch(process.env.VUE_APP_BACK_END_BASE_URL+"game/random", {
        method: 'get', // string or object
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const res = await response.json()
    return res.data
}
