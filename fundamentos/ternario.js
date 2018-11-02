/*
    unário = um único operador;
    binário = com dois operandos
    ternário = com três operandos
    -> expressão ? quando expressão for verdadeira : quando a expressão for falsa
*/
const resultado = nota => nota >= 7 ? "Aprovado" : "Reporvado";

//Função Arrow
// const resultado = nota => {
//     return nota >= 7 ? "Aprovado" : "Reporvado";
// }


console.log( resultado(7.1) );
console.log( resultado(6.7) );