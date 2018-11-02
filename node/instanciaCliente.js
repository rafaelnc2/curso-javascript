const contadorA = require("./instanciaUnica");
const contadorB = require("./instanciaUnica");

//Retorna uma funcção factory
//Somente fazendo o require, a variável "contadorC" reotrna uma função
//abrindo e fechando parenteses no final do require, será reotrnado o objeto que resultado 
//da execução da função
const contadorC = require("./instanciaNova")();
const contadorD = require("./instanciaNova")();

contadorA.inc();
contadorA.inc();
console.log(contadorA.valor, contadorB.valor);

contadorC.inc();
contadorC.inc();
console.log(contadorC.valor, contadorD.valor);