let valor //não inicializada
console.log(valor);
//console.log(valor2); is not defined = não foi declarada

valor = null // NULL = ausência de valor; não aponta para nenhum local de memória
console.log(valor);
// ******SEMPRE UTILIZAR NULL QUANDO SE QUER ZERAR O VALOR DE UMA VARIÁVEL
//console.log(valor.toString()); -> Nunca tente acessar o toString de uma variável com valor NULL, vai apresentar um erro de TypeError
//NULL não tem referência de toString

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto.preco);

produto.preco = undefined; //evitar atribuir undefined
console.log(!!produto.preco);
delete produto.preco;
console.log(produto);

produto.preco = null; //sem preço
console.log(!!produto.preco);
console.log(produto);