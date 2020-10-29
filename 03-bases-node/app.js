const argv = require('yargs')
                    .command('listar', 'Muestra la tabla de multiplicar', {
                        base: {
                            demand: true,
                            alias: 'b'
                        },
                        limite: {
                            alias: 'l',
                            default: 10
                        }
                    })
                    .help()
                    .argv;

const { crearArchivo } = require('./multiplicar/multiplicar')


let comando = argv._[0]

switch (comando) {

    case 'listar':
        console.log('Listar')
        break;
    
    case 'crear':

        crearArchivo(argv.base)
        .then(archivo => console.log(archivo))
        .catch(error => {
            console.log(error)
        })

        break;
}
