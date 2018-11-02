//ES8: Object.values / Object.entries
//Object.values = pega todos os valores de um objeto
//Object.entries = devolve uma matriz, um array com as chaves e valores do objeto
const obj = { a:1, b:2, c:3 };
console.log(Object.values(obj));
console.log( Object.entries(obj) )

//Melhorias na notação literal do objeto
const nome = "Naty";
const pessoa = {
    //Não é necessário indicar o valor para o atributo dentro do objeto quando o mesmo tesm o mesmo nome que uma variável
    nome,
    //para criar uma função dentro do objeto não é necessário colocar a palavr "function"
    ola(){
        return "oi gente";
    }
};
console.log( pessoa.nome, pessoa.ola() );

//Classe
//Classe internamente é convertida para uma função
class Animal{};
class Cachorro extends Animal{
    falar(){ 
        return "Au au!"
    }
};
console.log( new Cachorro().falar() );