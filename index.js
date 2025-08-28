const { createarchivo } = require (`./helpers/multiplicador.js`);
const argv = require('./config/yargs.js');
const colors = require('./config/colors.js');


console.clear();
// console.log(argv);
// console.log('argv:', argv);
// console.log('base:', argv.base);

createarchivo(argv.base,argv.Listar,argv.hasta)
    .then((nombrearchivo) => console.log(nombrearchivo.brightGreen,'Creado exitosamente'.red))
    .catch((err) => console.log(err));
// const base = 3;