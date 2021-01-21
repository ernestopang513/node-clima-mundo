const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: ''
    }
}).argv;


const getInfo = async(direccion) => {

    try {

        const datos = await lugar.getLugarLatLong(direccion);
        const { name, lat, lon } = datos;
        const temp = await clima.getClima(lat, lon);


        return `El clima en ${name} es de ${temp} grados centigrados`;

    } catch (error) {
        throw new Error(`No se pudo determinar el clima de ${direccion}`);
        //return `No se pudo determinar el clima de ${direccion}`;
    }

}

getInfo(argv.direccion).then(resp => console.log(resp))
    .catch(error => console.log(error));


// lugar.getLugarLatLong(argv.direccion)
//     .then(resp => {

//         clima.getClima(resp.lat, resp.lon)
//             .then(resp => console.log(resp))
//         console.log(resp);
//     })
//     .catch(e => console.log(e))

// clima.getClima(40, -70)
//     .then(resp => console.log(resp))
//     .catch(error => console.log(error))