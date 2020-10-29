const fs = require('fs');

let crearArchivo = (base) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El dato ${base} introducido no es un numero`)
            return
        }
        
        let contenido = '';

        for (let i = 1; i <= 10; i++) {

            contenido += `${base} * ${i} = ${base * i}\n`
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, contenido, (err) => {

            if (err) {

                reject(err)
            
            } else {
                resolve(`tabla-${base}.txt`)
            }
        });
    })    
}

module.exports = {
    crearArchivo
}