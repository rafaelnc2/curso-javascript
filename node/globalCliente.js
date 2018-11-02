//Para que o arquivo "global.js" de fato coloque alguma coisa no escopo global, 
//é necessário que ele seja importado (require)

//Não é preciso colocar em nenhum variável, uma que o modulo não retorna nada
//ele simplesmente deve ser carregado para que a alteração do global seja feita
require("./global");
//Feito isso apenas uma vez, o sistema todo terá no global a função adicionada

console.log(MinhaApp.saudacao());

//Outro problema é que é possível alterar um atrubuto dentro do global em qualquer lugar do sistema
//Uma solução é a utilização do comando freeze na criação do objeto
MinhaApp.nome = "Eita!";
console.log(MinhaApp.nome);
