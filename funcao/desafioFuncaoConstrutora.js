class Pessoa{
    constructor(nome){
        this.nome = nome;
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`);
    }
}

let p1 = new Pessoa("João");
p1.falar();


function pessoa(nome){
    this.nome = nome;
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
let p2 = new pessoa("Rafael");
p2.falar();