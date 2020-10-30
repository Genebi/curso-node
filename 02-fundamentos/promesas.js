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


let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find(empleado => empleado.id == id)

        if (!empleadoDB) {

            reject(`No existe un empleado con ID ${id}`)

        } else {

            resolve(empleadoDB)
        }
    })
}


let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {

        let empleadoSalario = salarios.find(salario => salario.id == empleado.id)

        if (!empleadoSalario) {

            reject(`No se encuentra un salario para el empleado ${empleado.nombre}`)

        } else {

            let datos = { nombre: empleado.nombre, salario: empleadoSalario.salario }

            resolve(datos)
        }
    })
}

getEmpleado(3).then(empleado => {

        return getSalario(empleado)
    })
    .then(resp => {

        console.log(`El salario de ${resp.nombre} es de ${resp.salario}`)
    })
    .catch(error => {
        console.log(error)
    })