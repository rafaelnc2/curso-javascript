//Exemplo de retorno utilizando apenas "Callback", sem "Promises".
//O modulo "HTTP" é nativo do node 
const http = require("http");

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    http.get(url, res => {
        //os dados chegam de forma parcial, sendo assim, é necessário concatenar os reusltados para obter o dado completo
        let resultado = "";

        //o evento "on('data'" é um evento de resposta onde os dados recebidos são interceptados na variável "dados"
        res.on("data", dados => {
            resultado += dados;
        });

        //o evento "on('end'" indica o fim da transmissão de dados, ou seja, todos os dados foram recebidos
        res.on("end", () => {
            callback(JSON.parse(resultado));
        });
        //retorna o resultado convertido em objeto para a função "callback" informada no parâmetro da função "getTurma"
    });
};

//Array para agrupar apenas os nome retornados
let nomes = [];

getTurma('A', alunos => {
    nomes = nomes.concat( alunos.map(a => `A: ${a.nome}`) );
    
    getTurma('B', alunos => {
        nomes = nomes.concat( alunos.map(a => `B: ${a.nome}`) );

        getTurma('C', alunos => {
            nomes = nomes.concat( alunos.map(a => `C: ${a.nome}`) );
            console.log( nomes );
        });
    });
});