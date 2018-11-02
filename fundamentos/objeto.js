const prod1 = {};
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40; //EVITAR ATRIBUTOS COM ESPAÇO!!!!

console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj:{
        blabla: 1,
        obj:{
            blabla: 2
        }
    }
};
console.log(prod2);

//não confundir objetos com JSON. JSON é objeto javascript textual para interoperabilidade entrer sistemas.
// JSON = JAVASCRIPT OBJECT NOTATION (OBJETO JAVASCRIPT PARA NOTAÇÃO)
//'{"nome": "Camisa Polo", "preco": 79.90 }'