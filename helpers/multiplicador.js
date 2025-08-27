const fs = require('fs')
const colors = require('../config/colors.js');


const createarchivo = async(base=1,Listar=false,hasta=10) =>{
    try {
    let ciclo  = hasta;
    let salida =``;
    let consola =``;
    
        for (let i = 1; i <= ciclo; i++) {
            let result = base * i
            salida += (`${base} x ${i} = ${result}\n`);
            consola += (`${colors.data(base)} x ${colors.data(i)} = ${colors.verbose(result)}\n`);
        }
    if (Listar) {
        console.log(`===============`.green);
        console.log(`La tabla del ${colors.blue(base)}`.green);
        console.log(`===============`.green);
        console.log(`${consola}`);
    }
    // console.log(`${salida}`);

    fs.writeFileSync( `./tablas/tabla-${base}.txt`, salida); 
    
        return `tabla-${base}.txt`;
        
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createarchivo
}
