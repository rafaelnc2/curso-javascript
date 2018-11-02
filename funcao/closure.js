// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto léxico em ação!

const x = "Global";

function fora(){
    const x = "Local";
    function dentro(){
        return x;
    }
    return dentro;
}

// A função dentro, que é retornada pela função fora, le a variável local, pois ele carrega consigo 
// o escopo externo mais próximo à função
const minhaFuncao = fora();
console.log(minhaFuncao());