const aprovados = [ "Agatha", "Aldo", "Daniel", "Raquel" ];

//A função callBack que é passada para um forEach, sempre recebe três parâmtros
// no exemplo abaixo: nome, indice, o proprio array

aprovados.forEach(function(nome, indice){
    console.log( `${indice + 1}) ${nome}` );
});

aprovados.forEach(nome => console.log(nome));

const exibirAprovado = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovado);
//o indice sempre é passado como segundo parâmetro
//caso queira acessar o indice, obrigatoriamente deve colocar o primeiro parametro para que o 
//segundo seja o indice
const exibirAprovado2 = (aprovado, indice) => console.log( `${indice+1}) ${aprovado}`);
aprovados.forEach(exibirAprovado2);