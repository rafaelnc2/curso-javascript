// Tagged template - A ideia é conseguir processar uma template string dentro de uma função
function tag(partes, ...valores){
    console.log(partes);
    console.log(valores);
    return "Outra string";
};

const aluno = "Natália";
const situacao = "Aprovada";
console.log(tag `${aluno} está ${situacao}.` );