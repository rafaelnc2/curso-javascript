//Promise - É uma promessa que pode ser resolvida com sucesso ou pode ser rejeitada
//Nomralmente utilizada para requisições assíncronas

//Função com dois parâmetros que retorna uma promessa
function falarDepoisDe(segundos, frase){
    //Uma promise sempre tem dois parâmetros. 1 de sucesso (resolve) e um de Reject, no caso de algum problema
    return new Promise( (resolve, reject)=>{
        //Para simular uma situação assíncrona, foi incluido um setTimeout para demorar
        //um pouco para resolver a promise
        setTimeout( () => {
            //Sempre o resolve aceita apena um único parâmetro
            //Caso seja necessário mais de um valor, devemos passar um objeto
            resolve(frase)
            //reject(frase)
        }, segundos * 1000);
        //vezes 1000 para transformar os milisegundos em segundos
    });
};

//Para acessar o resultado de uma promise atendida de forma correta, é necessário chamar o "then"
//O "then" de uma promise pode ser encadeado sendo chamado mais de uma vez
falarDepoisDe(3, "Que legal!")
    //.then(frase => console.log(frase))
    .then(frase => frase.concat("?!?!"))
    .then(novaFrase => console.log(novaFrase))
    //Para acessar o reject, deve se utiliza o "catch"
    //O "catch", ao contrário do "then" só pode ser chamado uma única vez
    .catch(e => console.log(e));