const axios = require('axios');

export async function getRandomFromApi(url){
    return axios.get(url)
        .then(function (response) {
            // handle success
            console.log("reponse : ", response)
            console.log(response.data)
            return response.data
        })
        .catch(function (error) {
            // handle error
            console.error(error)
            return null;
        })
}
