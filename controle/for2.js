const notas = [ 6.7, 7.4, 9.8, 8.1, 7.7 ];

//Funciona mas não é a melhor forma para percorrer os itens de um array
//Sempre declarar a variácel de controle, neste caso o "i" com let, para que a 
//  variável fique apenas no escopo da estrutura
for(let i in notas){
    console.log(i, notas[i]);
};

const pessoa = {
    nome: "Ana",
    sobrenome: "Silva",
    idade: 29,
    peso: 64
};

//Uma boa opção para percorrer os atributos de um objeto
for(let atributo in pessoa){
    console.log( `${atributo} = ${pessoa[atributo]}` );
};