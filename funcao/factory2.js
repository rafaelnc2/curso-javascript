//minha versão
// function criarProduto(nome, preco, desconto = 0.1){
//     return{
//         nome: nome,
//         preco: preco,
//         desconto: desconto
//     }
// }

//versão professor
function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto("mouse","50"))
console.log(criarProduto("teclado","80"))