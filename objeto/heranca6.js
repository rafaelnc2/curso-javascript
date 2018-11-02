function Aula(nome, videoID){
    this.nome = nome;
    this.videoID = videoID;
}

//Quando se tem uma função construtora e utiliza o operador NEW, é criado um novo objeto
// e o prototipo do objeto criado aponta para a função (ex. Aula.prototype) 
const aula1 = new Aula("Bem vindo", 123);
const aula2 = new Aula("Até breve", 456);

console.log(aula1, aula2);

//Simulando o operador NEW
// ... = operador spread e rest -> recebe um conjunto de parâmetros e os concatena em um Array
function novo(funcao, ...params){
    //1 passo: como estamos simulando o new, será utilizada a notação literal de objetos
    const obj = {};
    //2 passo: fazer com que o prototipo do objeto que acabou de ser criado, aponte para a funcao.prototype
    obj.__proto__ = funcao.prototype;
    //3 passo: chamar a funcao que recebemos por parâmetro com apply
    //          (contexto/escopo, Array de parametros)
    funcao.apply(obj, params);
    return obj;
}

const aula3 = novo(Aula, "Bem vindo", 123);
const aula4 = novo(Aula, "Até breve", 456);
console.log(aula3, aula4);