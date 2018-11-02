const alunos = [
    {nome: "João", nota: 7.9},
    {nome: "Maria", nota: 9.2}
];

//Imperativo
//Foco nesse tipo de programação não é muito "o que tem que ser feito" mas sim "como tem que ser feito"
//Os detalhes de "como tem que ser feito" são mais importantes do que "o que tem que ser feito"
let total1 = 0;
for(let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota;
}
console.log(total1 / alunos.length);

//Declarativo
//Facilita o reuso do código pois, utiliza funções pequenas e bastante especialistas
//Simplesmente é dito "o que tem que ser feito" e as coisas, internamente, serão feitas
const getNota = aluno => aluno.nota;
const soma = (total, atual) => total + atual;
//Reduce tem a função de reduzir e agragar/soamr valores
const total2 = alunos.map(getNota).reduce(soma);
console.log(total2 / alunos.length);

// selct codigo, nome, email from clientes where ativo = 1
// comandos SQL são totalmente declarativos pois, não importa o como o banco irá fazer para retornar o resultado
//o importante é que ele retorna o resultado desejado
