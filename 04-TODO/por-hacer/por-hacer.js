const fs = require('fs')

let listadoPorHacer = []

const crear = (descripcion) => {

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer)

    guardaDB()

    return porHacer
}

const guardaDB = () => {

    let datos = JSON.stringify(listadoPorHacer)

    fs.writeFile('db/data.json', datos, (error) => {

        if (error) throw new Error('No se pudo guardar la informacion')
    })
}

module.exports = {
    crear
}