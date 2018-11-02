class Avo{
    constructor(sobrenome = "Avo sobrenome"){
        this.sobrenome = sobrenome;
    }
}

class Pai extends Avo{
    constructor(sobrenome, profissao = "Professor"){
        //Classe Pai herda o atributo Sobrenome da classe Avo
        //super está acionando o construtor da classe Avo e atirbuindo o valor recebido 
        super(sobrenome);
        this.profissao = profissao;
    }
}

class Filho extends Pai {
    //Filho herda os atributos da classe Pai
    constructor(){
        //Super está atribuindo valor para o atributo Sobrenome da classe Pai que herdou da classe Avo
        super("Filho Silva");
    }
}

const filho = new Filho;
console.log(filho);