const nums = [1, 2, 3, 4, 5];

// Map é um For com propósito
// O resultado da função map é sempre um novo array, ele não altera o array atual
// O novo array sempre tem o mesmo tamanho que o array original

let resultado = nums.map(function(e){
    //a função map tem o objetivo de mapear / transformar o elemento atual 
    return e * 2;
});

console.log(resultado);

const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${ parseFloat(e).toFixed(2).replace('.',',') }`;

resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado);