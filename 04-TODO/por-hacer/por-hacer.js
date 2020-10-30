const fs = require('fs')

let listadoPorHacer = []

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer)

    guardaDB()

    return porHacer
}

const cargarDB = () => {

    try {

        listadoPorHacer = require('../db/data.json')

    } catch (error) {

        listadoPorHacer = []
    }
}

const getListado = () => {

    cargarDB()

    return listadoPorHacer
}

const guardaDB = () => {

    let datos = JSON.stringify(listadoPorHacer)

    fs.writeFile('db/data.json', datos, (error) => {

        if (error) throw new Error('No se pudo guardar la informacion')
    })
}

const actualizar = (descripcion, completado = true) => {

    cargarDB()

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {

        listadoPorHacer[index].completado = completado

        guardaDB()

        return true

    } else {

        return false
    }
}


const eliminar = (descripcion) => {

    cargarDB()

    let datos = listadoPorHacer.filter(tarea => tarea.descripcion != descripcion)

    if (datos.length === listadoPorHacer.length) {

        return false
        
    } else {

        listadoPorHacer = datos

        guardaDB()

        return true
    }  
}

module.exports = {
    crear,
    getListado,
    actualizar,
    eliminar
}