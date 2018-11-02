//Importando módulos
//Utilizar a função require com o caminho relativo do arquivo que deseja importar
//Não é necessário colocar a extensão .js no caminho do arquivo importado
//Caso esteja importando um modulo de terceiro, colocar o caminho completo
const moduloA = require("./moduloA");
const moduloB = require("./moduloB");

console.log(moduloA.ola);
console.log(moduloA.bemVindo);
console.log(moduloA.ateLogo);
console.log(moduloA);

console.log(moduloB.bomDia);
console.log(moduloB.boaNoite());
console.log(moduloB);