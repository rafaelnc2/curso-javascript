// let e const
//let tem apenas o escopo de bloco
{
    var a = 2;
    let b = 3;
    console.log(b);
}
console.log(a);

//Template string
const produto = "iPad";
console.log( `${produto} é caro` );

//Destructuring
const [l, e, ...tras] = "Cod3r";
console.log( l, e, tras );

const [x, , y] = [1, 2, 3];
console.log(x, y);

const { nome, idade } = { nome: "Rafael", idade: 33 };
console.log(nome, idade);