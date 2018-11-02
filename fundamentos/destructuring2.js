let [a] = [10];
console.log(a);

const [, , b] = [2, 3, 4, 5];
console.log(b);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

//ignora o primeiro item do array e atribui a variável nota o segundo item do segundo array
const [, [, nota] ] = [ [, 8, 8], [9, 6, 8] ];
console.log(nota);