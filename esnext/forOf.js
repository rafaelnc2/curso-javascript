//Estrutura de repetição que itera em cima de valores e não de indices
//Mais interessante para iterar em cima de Map, Set, String, Array, Objeto

for( let letra of "Cod3r" ){
    console.log(letra);
};

const assuntosEcma = ["Map", "Set", "Promise"];
//in itero sobre o indice
for(let i in assuntosEcma){
    console.log(i);
};

for(let assunto of assuntosEcma){
    console.log(assunto);
};

const assuntosMap = new Map([
    ["Map", { abordado: true }],
    ["Set", { abordado: true }],
    ["Promise", { abordado: false }]
]);

//Percorres todos os itens
for( let assunto of assuntosMap ){
    console.log(assunto);
};

//Percorrer apenas as chaves
for( let chave of assuntosMap.keys()){
    console.log(chave);
};

//Percorrer apenas os valores
for(let valor of assuntosMap.values()){
    console.log(valor);
};

//Percorrer as entries utilizando destructuring
for(let [chave, valor] of assuntosMap.entries()){
    console.log(chave, valor);
};

//É possível percorrer o Set
const s = new Set(["a","b","c"]);
for(let letra of s){
    console.log(letra);
}