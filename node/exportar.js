console.log(module.exports);
console.log( module.exports === this );
console.log( module.exports === exports );

//Como deixar a variável visivel para outros modulos
this.a = 1;
exports.b = 2;
module.exports.c = 3;
//Todas elas apontam para uma mesma referência de memória
//No final das contas, quem será retornada a partir de um modulo, é o module.exports

exports = null;
console.log(module.exports);

//Não é possível referenciar um novo objeto para ser exportado da maneira abaixo
// Para isso, deve ser utilizado o module.exports
exports = {
    nome: "Teste"
};
console.log(module.exports);

module.exports = { publico: true };