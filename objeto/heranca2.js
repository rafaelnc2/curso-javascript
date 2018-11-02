// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = 'Z'; // Não recomendado... não faça isso em casa!!
// Desta forma, todo os objetos do projeto serão impcatados, pois estamos inserindo um novo atributo
// diretamente no prototype do Object

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if( this.velAtual + delta <= this.velMax ){
            this.velAtual += delta;
        }else{
            this.velAtual = this.velMax;
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
    }
};

const ferrari = {
    movelo: "F40",
    velMax: 324 // Shadowing (sombrear) - sobrescreve o valor do pai
};

const volvo = {
    modelo: "V40",
    // super faz referência ao método que está no objeto pai
    // como estou utilizando o mesmo nome de método, para que não fique invocando o método de forma recursiva,
    // devo utilizar o super para invocar o método do objeto pai
    status(){
        return `${this.modelo}: ${super.status()}`;
    }
};

// Outra forma de estabelecer a função de prototipo entre dois objetos
// Primeiro parâmetro é um objeto e o segundo parâmetro é o prototipo
// equivalente a setar __proto__ = carro dentro da criação do objeto ferrari/volvo
Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(100);
console.log(volvo.status());

ferrari.acelerarMais(300);
console.log(ferrari.status());