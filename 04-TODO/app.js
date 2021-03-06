const argv = require('./config/yargs').argv
const porHacer = require('./por-hacer/por-hacer')
const colors = require('colors')

let comando = argv._[0]

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea)
        break;

    case 'actualizar':

        let actualizar = porHacer.actualizar(argv.descripcion, argv.completado)

        console.log(actualizar)

        break;

    case 'listar':

        let tareas = porHacer.getListado()

        for (let tarea of tareas) {

            console.log("========= POR HACER =========".green)
            console.log(`Descripcion: ${tarea.descripcion}`)
            console.log(`Estado: ${tarea.completado}`)
            console.log("=============================".green)
        }

        break;

    case 'borrar':

        let eliminar = porHacer.eliminar(argv.descripcion)

        console.log(eliminar)

        break;

    default:
        console.log('Comando no reconocido')
}