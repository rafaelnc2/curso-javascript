const pai = { nome: "Pedro", corCabelo: "preto" };

// Cria o objeto baseado, com prototype no objeto pai
const filha1 = Object.create(pai);
filha1.nome = "Ana";
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
    // defineProperty
    nome: { value: "Bia", writable: false, enumerable: true }
});
filha2.nome = "Carla";
console.log( `${filha2.nome} tem o cabelo ${filha2.corCabelo}` );

console.log( Object.keys(filha1) );
console.log( Object.keys(filha2) );

// hasOwnProperty = verifica se o atributo é do prorprio objeto ou se herdou do objeto pai
for( let key in filha2 ){
    filha2.hasOwnProperty(key) ? console.log(key) : console.log( `Por herança: ${key}`);
}