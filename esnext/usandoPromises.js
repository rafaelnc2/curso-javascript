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

//Array para agrupar apenas os nome retornados
let nomes = [];

//Desta forma temos uma Promise sendo chamada dentro da outra
//Lembrando que o método "then" é chamado nos casos de sucesso na execução da promise
//Neste formato a execução funciona normalmente, porém, se tratadno de "Promise", existe uma forma mais interessante de se fazer
//este tipo de composição de chamadas ao invés de ser uma "callback" dentro da outra
//Demora mais para se resolver devido as fazer uma chamada depois da outra
// getTurma('A').then(alunos => {
//     nomes = nomes.concat( alunos.map(a => `A: ${a.nome}`) );
    
//     getTurma('B').then(alunos => {
//         nomes = nomes.concat( alunos.map(a => `B: ${a.nome}`) );

//         getTurma('C').then(alunos => {
//             nomes = nomes.concat( alunos.map(a => `C: ${a.nome}`) );
//             console.log( nomes );
//         });
//     });
// });

//Desta forma, uma única chamada invoca as três funções e fica esperando que elas sejam "resolvidas" ou "rejeitadas"
//e a partir daí começa a fazer a composição das funções 
//Nesse formato a resolução é mais rápido pois, uma única chamada resolve as três chamadas
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then( turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    //Muito importante sempre fazer o tratamento de erros com o "catch"
    //sempre que estiver trabalhando com "Promises" colocar o "then" e em seguida colocar o tratamento de erro "catch"
    .catch(e => console.log(e.message));

getTurma('D').catch(e => console.log(e.message));