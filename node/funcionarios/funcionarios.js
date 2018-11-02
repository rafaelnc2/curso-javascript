const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
//Axios é uma biblioteca que faz requisições http. É utilizado para obter informações de algo que está remoto
const axios = require("axios");

const chineses = f => f.pais === "China";
const mulheres = f => f.genero === "F";
const menorSalario = (func, funcAtual) => {
    return func.salario > funcAtual.salario ? func : funcAtual;
};

axios.get(url).then(response => {
    const funcionarios = response.data;

    //Pegar a mulher chinesa com menor salário
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario);

    console.log(func);
});