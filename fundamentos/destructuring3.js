/*
    Esta funcao está esperando um objeto com os atributos min e max, porém, vai utilizar o destructuring para
    acessar os atributos min e max do objeto sem a necessidade de utilizar a notação ponto.
    Valores padrão de 0 e 1000 caso não seja passado algum dos valores (Intriduzido no ES2015)
*/
function rand( {min=0, max=1000} ){
    console.log(min, max);
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

//Passando um objeto com os atributos min e max
const obj = { min: 40, max: 50 };
console.log( rand({max: 50, min: 40}) );
console.log( rand(obj) );
console.log( rand({min: 955}) );
console.log( rand({}) );

//Erro pois vai tentar desestruturar nada
// console.log( rand() );