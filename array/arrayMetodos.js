//Lembrando: Mesmo que o array seja uma constante, o conteúdo do array pode ser alterado,
//o que não pode acontecer é setar qualquer outra coisa dentro da variável piloto
const pilotos = [ "Vettel", "Alonso", "Raikkonem", "Massa" ];

//Remove o último elemento do array
pilotos.pop(); //massa quebrou o carro
console.log(pilotos);

//Inclui um item no final do array
pilotos.push("Verstappen");
console.log(pilotos);

//Remove o primeiro elemento do array
pilotos.shift();
console.log(pilotos);

//Inclui um item no inicio do array
pilotos.unshift("Hamilton");
console.log(pilotos);

//Splice pode tanto adicionar quanto remover itens do array
//inclui Massa e Botas no array a partir do indice 2
pilotos.splice(2, 0, "Botas", "Massa");
console.log(pilotos);

//remove 1 item a partir do indice 3
pilotos.splice(3, 1); //massa quebrou
console.log(pilotos);

// Metodo slice retorno um novo array
//retorno um novo array a partir do indice 2 do array pilotos
const algunsPilotos1 = pilotos.slice(2);
console.log(algunsPilotos1);

//slice também pode ser usado para trazer os elementos dentro de um range de indice
//abaixo, o slice retorna um novo array com os itens do indice 1 até o 4, porém,
//o item no indice 4 não entra para o novo array
const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);