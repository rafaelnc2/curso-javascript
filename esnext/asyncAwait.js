//Exemplo de retorno com  "Promises".
//O modulo "HTTP" é nativo do node 
const http = require("http");

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;

    return new Promise((resolve, reject) => {
        http.get(url, res => {
            //os dados chegam de forma parcial, sendo assim, é necessário concatenar os reusltados para obter o dado completo
            let resultado = "";
    
            //o evento "on('data'" é um evento de resposta onde os dados recebidos são interceptados na variável "dados"
            res.on("data", dados => {
                resultado += dados;
            });
    
            //o evento "on('end'" indica o fim da transmissão de dados, ou seja, todos os dados foram recebidos
            res.on("end", () => {
               try {
                   resolve(JSON.parse(resultado));
               } catch (e) {
                   reject(e);
               } 
            });
        });
    });
};

//Recurso muito recente inserido no ES8
// O objetivo do "Async/Await" é simplificar a utilização das "Promisses"
//Tornando o código assíncrono com uma pegada mais síncrona

//Sempre que for utilizar devemos marcar a chamada da função com a palavra "async" e dentro da função deve estar marcada com 
//a palavra "await"
let obterAlunos = async () => {
    //sempre que estiver lidando com uma função que retorna uma promise, podemos simplesmente colocar a palavra "await"
    //e esta função só irá para o próximo passo se ela for resolvida, retornando os dados, ou mesmo se tiver com um erro
    const ta = await getTurma('A');
    //Ao invés de chaar o "then" e dentro dele ter acesso a "turma A", simplemente faço a chamada utilizando o "await"
    //e o resultado será atribuído a variável "ta" 

    const tb = await getTurma('B');
    const tc = await getTurma('C');

    return [].concat(ta, tb, tc);
};

//Por mais resteja retornando um "array", quando utilizamos o "async", o retorno sempre é um objeto "asyncFunction"
//em cima deste "asyncFunction" é que chamamos a função "then" para executar
obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes));