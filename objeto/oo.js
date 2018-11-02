// CÓDIGO NÃO EXECUÁVEL!!

// Procedural - Tinhamos funções que manipulavam dados
processamento(valor1, valor2, valor3)

// OO - Temos dados e dentro dos dados temos funções
//O objeto (dados personalizados) funciona como uma cápsula, que agrupa comportamentos e atributos
objeto = {
    //Valores / atributos internos do objeto
    valor1,
    valor2,
    valor3,

    //Funções / comportamentos dentro do objeto
    processamento(){
        //...
    }
}

objeto.processamento(); // O foco passou a ser o objeto (que antes era a função)

// Principios importante:
// 1. Abstração:
    // Entender como pegar o mundo real e traduzir em software é um dos desafios da orientação à objetos

// 2. Encapsulamento:
    // Esconder os detalhes de implementação e expor apenas a INTERFACE de comunicação que ajuda a comunicar os objetos entre sí.

// 3. Herança (prototype):
    // Relações do tipo "É UM" - Ex,: Ser humano É UM mamífero; Mamífero É UM animal; Civic É UM carro; ferrari É UM carro;...
    // Nem toda relação "É UM" é uma herança, mas muito provavelmente você uma relação "É UM" como herança
    // Receber atributps e comportamentos de um objeto pai
    // É melhor priorizar a relação "TEM UM" do que a herança - Ex.: Carro "TEM UM" motor

// 4. Polimorfismo:
    // Multiplasformas - A partir de um objeto mais genérico com uma variável, atribuir subtipos, 
        //Ex.: Um objeto carro pode virar uma ferrari, pode virar um uno...
