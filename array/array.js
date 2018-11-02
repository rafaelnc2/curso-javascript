//Apesar do javascript ser uma linguagem fracamente tipada, as boas prática sugerem que 
//um array deve ter apenas um tipo de dado
console.log( typeof Array, typeof new Array, typeof [] );

//Existem duas formas de criar um Array
//A partir do objeto Array com o operador NEW - não muito recomendado
let aprovados = new Array("Bia", "Carlos", "Ana");
console.log(aprovados);

//Forma lietral
aprovados = [ "Bia", "Carlos", "Ana" ];
console.log(aprovados);

//Lembrando que o Array é um objeto indexado que começa sempre do zero 0
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);

//Tentar acessar um index que não existe no Array, simplesmente será retornado um undefined
console.log(aprovados[3]);

//Uma forma de incluir um novo item no Array é o exemplo abaixo, porém, 
//este formato é mais utilizado para substituir valores
aprovados[3] = "Paulo";

//Para incluir um item no final do Array e mais apropriado
aprovados.push("Abia");

//Pegar o tamanho do Array
console.log(aprovados.length);

//É possível atribuir valor para um indice maior que o existente
aprovados[9] = "Rafael";
//Fazendo isso, os indices anteriores, que não foram setados, serão iniciados com o valor undefined
console.log(aprovados.length);
console.log(aprovados[8] === undefined );

console.log(aprovados);
//Ordenando o Array - Isso causa uma alteração dentro do Array
aprovados.sort();
//Muitos métodos não alteram o Array original, mas sim, retorna um novo Array
console.log(aprovados);

//O delete não exlui o indice do Array, apenas seta o valor do indice para undefined
delete aprovados[1];
//Mesmo deletando o indice 1, este indice não deixa de existir, apenas é trocado o seu valor
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = [ "Bia", "Carlos", "Ana" ];
//Comando splice, pode ser utilizado para excluir um item, adicionar um novo item ou excluir e incluir ao mesmo tempo
//splice(indice inicio, quantidade de indices)
aprovados.splice(1, 1)
//vai até o indice 1 e exclui este indice
console.log(aprovados);
//vai até o indice 1 e exclui dois indices a partir do 1
aprovados.splice(1, 2);
//A partir do indice 1, exclui dois elementos e inclui outros dois elementos
aprovados.splice(1, 2, "Elemento1", "Elemento2");
console.log(aprovados);

//A partir do indice 1, não exclui nenhum elemento e inclui outros dois elementos
aprovados.splice(1, 0, "Elemento1", "Elemento2");
console.log(aprovados);