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

let criarPessoa = (nome) => {
    return {
        falar(){
            console.log(`Meu nome é ${nome}`);
        }
    }
}
let p2 = criarPessoa("Joana");
p2.falar();