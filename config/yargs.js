const yargs = require('yargs/yargs')(process.argv.slice(2));
const argv = yargs
    .option('base', {
        alias: 'b',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('hasta', {
        alias: 'h',
        type: 'number',
        demandOption: true,
        default:10,
        describe: 'Limite de multiplicador'
    })
    .option('Listar', {
        alias: 'l',
        type: 'boolean',
        default:false,
        describe: 'Listado de la tabla de multiplicar'
    })
    .check((argv, options) => {
    if (isNaN(argv.base)) {
    throw new Error("La base debe ser numero entero")
    } else {
      return true // tell Yargs that the arguments passed the check
    }
    
    })
    .check((argv, options) => {
    if (isNaN(argv.hasta)) {
    throw new Error("El limite debe ser numero entero")
    } else {
      return true // tell Yargs that the arguments passed the check
    }
    
    })
    .help()
    .argv;

module.exports = argv;