// Variável declarada com LET sempre respeita o escopo independente de ser uma FUNCTION ou não
var numero = 1;
{
    let numero = 2;
    //Neste caso, a preferência por utilizar a variável é sempre do escopo menor
    //Caso não encontre, procura a variável no escopo acima
    console.log("dentro = ", numero);
}
console.log("fora = ", numero);

/*
    VARIÁVEIS DEFINIDAS COM LET TEM ESCOPO GLOBAL, ESCOPO DE FUNÇÃO E ESCOPO DE BLOCO, QUE É A DIFERENÇA PRIMORDIAL ENTRE LET E VAR
*/