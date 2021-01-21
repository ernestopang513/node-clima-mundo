// const { require } = require("yargs");

const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=79c7cee943e4d7c3c1e90368902085ec&units=metric`);
    return resp.data.main.temp;
}

// getClima(30, 40)
//     .then(resp => console.log(resp))
//     .catch(error => console.log(error))

module.exports = {
    getClima
}