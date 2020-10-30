const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        desc: 'Nombre de la ciudad a buscar'
    }
}).argv


console.log(argv.direccion)