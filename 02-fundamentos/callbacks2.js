let empleados = [{
        id: 1,
        nombre: "Alejandro"
    },
    {
        id: 2,
        nombre: "Emmanuel"
    },
    {
        id: 3,
        nombre: "Kevin"
    }
]

let salarios = [{
        id: 1,
        salario: 2500
    },
    {
        id: 2,
        salario: 2000
    }
]


let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find(empleado => empleado.id == id)

    if (!empleadoDB) {

        callback(`No existe un empleado con ID ${id}`)

    } else {

        callback(null, empleadoDB)
    }
}


let getSalario = (empleado, callback) => {

    let empleadoSalario = salarios.find(salario => salario.id == empleado.id)

    if (!empleadoSalario) {

        callback(`No se encuentra un salario para el empleado ${empleado.nombre}`)

    } else {

        let datos = { nombre: empleado.nombre, salario: empleadoSalario.salario }

        callback(null, datos)
    }
}

getEmpleado(1, (error, empleado) => {

    if (error) {
        return console.log(error)
    }

    getSalario(empleado, (error, respuesta) => {

        if (error) {
            return console.log(error)
        }

        console.log(`El salario de ${respuesta.nombre} es de ${respuesta.salario}`)
    })
})