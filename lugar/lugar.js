const axios = require('axios');
// const colors = require('colors');
var colors = require('colors/safe');


const getLugarLatLong = async(direccion) => {

    const encodedUrl = encodeURI(direccion)
        // console.log(encodedUrl);

    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodedUrl}`,
        headers: { 'x-rapidapi-key': 'f078698db9mshf959bdd7261c6eep187b26jsn841a42fdd046' }

    });

    try {
        const resp = await instance.get();
        // console.log(resp.data);
        const { coord: { lon, lat }, name } = resp.data
            // console.log(lon, lat, name);
        return {
            name,
            lat,
            lon
        }

    } catch (error) {
        // throw new Error(`Hubo un error!!!!!!!!\nNo hay resultados para la direccion: '${direccion}'\nError del tipo: ${colors.red(error.response.status)}`);

        return `Hubo un error!!!!!!!!\nNo hay resultados para la direccion: '${direccion}'\nError del tipo: ${colors.red(error.response.status)}`;

    }


    // console.log(resp.status)

    // if(resp.data)
    // instance.get()
    //     .then(resp => {
    //         console.log(resp.data);
    //         console.log();
    //     }).catch(err => {
    //         console.log('Error garrafal', err);
    //     })



}

module.exports = {
    getLugarLatLong,
}