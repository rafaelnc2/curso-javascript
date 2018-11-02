// Factory é uma função que sempre retorna um objeto

// Factory simples
function criarPessoa(){
    return {
        nome: "ana",
        sobrenome: "silva"
    }
}

console.log(criarPessoa());