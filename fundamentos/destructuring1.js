//Novo recurso introduzido no ES2015
//Extrair um elemento de dentro de um objeto para uma variável

const pessoa = {
    nome: "Ana",
    idade: 50,
    endereco: {
        logradouro: "Rua ABC",
        numero: 1000
    }
}

const { nome, idade } = pessoa;
console.log(nome, idade);

let { nome: n, idade: i} = pessoa;
console.log(n,i);

const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada );


//Extraindo dados de objeto que está dentro de outro objeto para dentro de uma variável
const { endereco: { logradouro, numero, cep } } = pessoa;
console.log( logradouro, numero, cep );

// const { conta: { ag, num} } = pessoa;
// console.log(ag, num);