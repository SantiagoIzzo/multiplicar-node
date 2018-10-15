const argv = require('./config/yargs.js').argv
    // var colors = require('colors')
var colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

// console.log(module)
// console.log(process.argv)
// console.log(argv.base, 'base')

let comando = argv._[0]

switch (comando) {
    case 'listar':
        console.log('Listar')
        listarTabla(argv.base, argv.limite)
        break
    case 'crear':
        console.log('Crear')
        console.log(argv.base, argv.limite)
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(err => console.log(err))
        break
    default:
        console.log('Comando no reconocido')
}
// let parametro = argv[2]
// let base = parametro.split('=')[1]