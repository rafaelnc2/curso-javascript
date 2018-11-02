// O novo objeto pessoa aponta para a reserva de memória 123 e dentro desta reserva estão os dados do objeto
// pessoa -> 123 -> {...}
const pessoa = { nome: "João" };
pessoa.nome = "Pedro";
console.log(pessoa);

// Se tentar alterar a reserva de memória para o qual o objeto esta apontando, aí sim dará um erro, pois
// a constante não permite que o objeto seja alterado, apenas os seus atributos
//pessoa = { nome: "Ana" };

Object.freeze(pessoa);
// Você congela o objeto e impossibilita qualquer a troca de qualquer valor, inclusão/alteração/exclusão de atributos e comportamentos
// O objeto fica constante
pessoa.nome = "Maria";
pessoa.end = "Rua ABC";
delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa);

// Criando um objeto constante desde o nascimento impossibilitando a alteração tanto dos atributos quanto do objeto em sí.
const pessoaConstante = Object.freeze({nome: "João"});
pessoaConstante.nome = "Maria";
console.log(pessoaConstante);