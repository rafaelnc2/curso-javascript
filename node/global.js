//console.log(global);
//Existe o campo global do node, porém, não é recomendado mexer
//Para que os atributos do modulo fiquem estáticos, uma opção é colocar o freeze na criação do objeto
global.MinhaApp = Object.freeze({
    saudacao(){
        return "Estou em todos os lugares!";
    },
    nome: "Sistema Legal"
});