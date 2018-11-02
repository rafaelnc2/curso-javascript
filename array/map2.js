const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
];

//Desafio
//Retonar apenas um array com os preços utilizando o map

const paraObj = e => JSON.parse(e);
const pegaPreco = e => e.preco;
const resultado = carrinho.map(paraObj).map(pegaPreco);

console.log(resultado);