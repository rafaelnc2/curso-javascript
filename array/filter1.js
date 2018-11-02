//Filter retorna um novo array com o filtro passado no callback
//Outra forma de percorrer um array com proprósito

const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true },
    { nome: "IPad", preco: 4199, fragil: true },
    { nome: "Copo de vidro", preco: 12.49, fragil: true },
    { nome: "Copo de plástico", preco: 18.99, fragil: false }
]

// console.log( produtos.filter(function(p){
    //Percorre os itens do array e faz a validação desejada
    //se o retorno da validação for false, o item não entra para o novo array
    //case o retorno seja true, o item entra para o novo array    
    // return false;
// }) );

const produtoCaro = e => (e.preco > 500);
const produtoFragil = e => (e.fragil === true);

const newArray = produtos.filter(produtoCaro).filter(produtoFragil);
console.log(newArray);