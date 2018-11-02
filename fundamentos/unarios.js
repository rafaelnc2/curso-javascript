let num1 = 1;
let num2 = 2;

num1++;

console.log(num1);
--num1;
console.log(num1);

//TESTE
console.log( ++num1 === num2-- ); // = TRUE 
// a soma do num1, por estar prefixada, é feita antes da comparação. Ja o decremento do num2, feito após a comparação

console.log( num1 === num2 );