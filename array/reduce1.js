//Reduce itera sobre o array acumulando resultados

const alunos = [
    { nome: "João", nota: 7.3, bolsista: false },
    { nome: "Maria", nota: 9.2, bolsista: true },
    { nome: "Pedro", nota: 9.8, bolsista: false },
    { nome: "Ana", nota: 8.7, bolsista: true }
];

// É possivel também, passar um valor inicial, assim, a soma não começaria do primeiro item do array
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual);
    return acumulador + atual;
}, 10);
//Lembrando que o valor inicial deve ser passado nos parâmetros depois da função callback

console.log(resultado);