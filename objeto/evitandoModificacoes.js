//Object preventExtensions
// Previne a extensão do objeto, não permite que sejam adicionados mais atributos no objeto
const produto = Object.preventExtensions({
    nome: "Qualquer", preco: 1.99, tag: "Promoção"
});

console.log("Extensível:", Object.isExtensible(produto));

produto.nome = "Borracha";
produto.descricao = "Borracha escolar branca";
delete produto.tag;
console.log(produto);

//Object.seal
// Selar o objeto. Não é possível deleter e nem adicionar atributos em um objeto, apenas alterar seus valores
const pessoa = { nome: "Juliana", idade: 35 }
Object.seal(pessoa);
console.log("Selado:", Object.isSealed(pessoa));

pessoa.nome = "Silva";
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa);

//Object.freeze
// É o resultado de um objeto selado e com valores constantes
// Não é possível incluir novos atributos, excluir atributos existentes e nem alterar seus valores
// O objeto fica completamente constante