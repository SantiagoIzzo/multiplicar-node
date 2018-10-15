const fs = require('fs');
var colors = require('colors')

let data = ''

let listarTabla = (base, limite = 10) => {
    console.log(`Listando Tabla del ${base}`.green)

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`)
    }
}

let crearArchivo = (base, limite = 10) => {
    console.log(`Creando Tabla del ${base}`.red)
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ${base} no es un numero`)
                // hay que hacer un return porque el reject se ejecuta y sigue corriendo el codigo
            return
        }
        for (let i = 1; i <= limite; i++) {
            data = data + `${base} * ${i} = ${base * i}\n`
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`tabla-${base}.txt`)
            }
        });
    })
}

module.exports = { crearArchivo, listarTabla }