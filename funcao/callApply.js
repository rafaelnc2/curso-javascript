function getPreco(imposto = 0, moeda = "R$"){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
    nome: "Notebook",
    preco: 4589,
    desc: 0.15,
    getPreco
}
global.preco = 20;
global.desc  = 0.1;

//Chamando a função diretamente
console.log(getPreco());

//Chamando a função através de um objeto
console.log(produto.getPreco());

const carro = { preco: 49990, desc: 0.20 };
console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

//O primeiro parâmetro sempre é o contexto que a função será executada
console.log(getPreco.call(carro, 0.17, '$'));

//Os parâmetros sempre devem ser passados em um array
console.log(getPreco.apply(global, [0.17, '$'] ));