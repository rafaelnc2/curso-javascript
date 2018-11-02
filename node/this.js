//Lembrando que o "this", FORA DE UMA FUNÇÃO, sempre aponta para o "exports.module"
console.log(this === global);
console.log(this === module);

console.log(this === module.exports);
console.log(this === exports);

function logThis(){
    //Dentro de uma função, o "this" NÃO aponta para "exports" e "module.exports" e sim para "global"
    console.log("Dentro de uma função...");
    console.log(this === exports);
    console.log(this === module.exports);
    console.log(this === global);

    //Muito cuidado pois, desta forma, a variável "perigo" está sendo incluida dentro do escopo global
    //this.perigo = "...";
}
logThis();