//const argv = require('yargs').argv
const argv = require('./config/yargs')

let comando = argv._[0]

console.log(comando)

switch (comando) {

    case 'crear':
        console.log('Comando crear')
        break;

    case 'actualizar':
        console.log('Comando actualizar')
        break;
    
    case 'listar':
        console.log('Comando listar')
        break;
    
    default:
        console.log('Comando no reconocido')
}