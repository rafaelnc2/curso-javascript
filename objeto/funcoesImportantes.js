const pessoa = {
    nome: "Natália",
    idade: 1,
    peso: 13
};

console.log( Object.keys(pessoa) );
console.log( Object.values(pessoa) );
console.log( Object.entries(pessoa) );

// Object.entries(pessoa).forEach(e => {
//     console.log( `${e[0]}: ${e[1]} ` );
// });
// Utilizando DESTRUCTURING no array
Object.entries(pessoa).forEach( ([chave, valor]) => {
    console.log( `${chave}: ${valor} ` );
});

// Cria uma propriedade para o objeto e pode funcionar como se fosse um freeze apenas para a propriedade
// Primeiro identifica qual é o objeto de destino;
// Segundo, informa o nome da nova propriedade
// Terceiro, informa as características da nova propriedade
Object.defineProperty(pessoa, "dataNascimento", {
    enumerable: true, // informa se a prirpiedade será listada em um Object.keys, por exemplo
    writable: false, // informa se será possível alterar a propriedade
    value: "11/05/2017" // atribui um valor para a propriedade
});
pessoa.dataNascimento = "01/01/2018";
console.log( pessoa.dataNascimento );
console.log( Object.keys(pessoa) );

// Object.assign - ECMAScript 2015
// Cria um objeto a partir de outros objetos
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c:3, a: 4}; // como ja existe um atributo "a", o valor de "a" será substituido pelo seu valor no ultimo objeto concatenado
const obj = Object.assign(dest, o1, o2);

Object.freeze(obj);
obj.c = 1234;
console.log(obj);
