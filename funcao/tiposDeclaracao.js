console.log(soma(3,4));
// function declaration
// pode ser chamada em qualquer posição do código
function soma(x, y){
    return x + y;
}

// function expression
// só pode ser chamada após a declaração da função
const sub = function(x, y){
    return x - y;
}
console.log(sub(3,4));

// named function expression
// beneficios na hora de debugar, pois mostra o nome da função no stack
// só pode ser chamada após a declaração da função
const mult = function mult(x, y){
    return x * y;
}
console.log(mult(3,4));