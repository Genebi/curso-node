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


let getEmpleado = async(id) => {

    let empleadoDB = empleados.find(empleado => empleado.id == id)

    if (!empleadoDB) {

        throw new Error(`No existe un empleado con ID ${id}`)

    } else {

        return empleadoDB
    }
}


let getSalario = async(empleado) => {

    let empleadoSalario = salarios.find(salario => salario.id == empleado.id)

    if (!empleadoSalario) {

        throw new Error(`No se encuentra un salario para el empleado ${empleado.nombre}`)

    } else {

        let datos = { nombre: empleado.nombre, salario: empleadoSalario.salario }

        return datos
    }
}


let getInformacion = async(id) => {

    let empleado = await getEmpleado(id)

    let salario = await getSalario(empleado)

    return salario
}

getInformacion(2).then(resp => {

    console.log(`${resp.nombre} tiene un salario de $${resp.salario}`)

}).catch(error => {

    console.log(error)
})