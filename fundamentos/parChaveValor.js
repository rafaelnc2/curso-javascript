// Par nome / valor

const saudacao = "Opa"; // contexto léxico 1

function exec(){
    const saudacao = "Faaalaaa"; // contexto léxico 2
    return saudacao;
}

//Objetos são conjuntos aninhados de chaves e valores
const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "Rua Muito Legal",
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);