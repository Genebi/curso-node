/* setTimeout(() => {
    console.log("Hola mundo");
}, 3000) */

let getUserID = (id, callback) => {

    let usuario = {
        nombre: "Alejandro",
        apellido: "Medina",
        edad: 30,
        id
    }

    if (id == 20) {

        callback(`El usuario con ID ${id} no existe`)

    } else {

        callback(null, usuario)
    }
}

getUserID(10, (error, usuario) => {

    if (error) {
        return console.log(error)
    }

    console.log("Usuario de la base de datos", usuario)
})