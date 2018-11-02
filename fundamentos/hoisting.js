/*
    Em javascript existe um içamento da declaração da variável.
    Mesmo que a variável seja declarada no meio do código, o interpretador
    joga a declaração para o inicio do código, assim, não da erro de declaração e esta varável pode ser utilizada
    em qualquer lugar do código - APENAS COM DELCARAÇÃO ATRAVÉS DO VAR
*/
console.log("a = ", a);
var a = 2;
console.log("a = ", a);


console.log("a = ", b);
let a = 2;
console.log("a = ", b);

//Assistir as video aulas do canal -> Dicas de JavaScript. Fala mais sobre o assunto além de tirar outras dúvidas