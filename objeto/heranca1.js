const ferrari = {
    modelo: "F40",
    volMax: 324
};

const volvo = {
    modelo: "V40",
    volMax: 200
};

// prototype está presente apenas dentro de funções

console.log( ferrari.prototype ); // = undefined pois ferrari é um objeto e não uma função
console.log( ferrari.__proto__ );
console.log( ferrari.__proto__ === Object.prototype );
console.log( volvo.__proto__ === Object.prototype );
console.log( Object.prototype.__proto__ === null );

function MeuObjeto() {};
console.log( typeof Object, typeof MeuObjeto );
console.log( Object.prototype, MeuObjeto.prototype );