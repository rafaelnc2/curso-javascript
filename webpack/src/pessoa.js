//recurso de módulos padrão do ES6 - export
//portanto, ao tentar executar utilizando o node, dará um erro pois ele não reconhece o padrão de 
//módulos do ES6 apenas do Commons JS

//Ja o webpack, reconhece os dois padrões

import "../modulos/mduloA"

export default class Pessoa{
    cumprimentar(){
        return "Bom dia!"
    }
}