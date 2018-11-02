function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0;

    //metodo public
    this.acelerar = function(){
        if( velocidadeAtual+delta <= velocidadeMaxima){
            velocidadeAtual += delta;
        }else{
            velocidadeAtual = velocidadeMaxima;
        }
    };

    this.freiar = () => {
        if( velocidadeAtual-delta >= 0 ){
            velocidadeAtual -= delta;
        }else{
            velocidadeAtual = 0;
        }
    };

    //metodo publico
    this.getVelocidadeAtual = () => velocidadeAtual;
}

//não colocar os parenteses na instância, serão utilizados os valores default
const uno = new Carro;
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 30);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());
ferrari.freiar();
console.log(ferrari.getVelocidadeAtual());

console.log( typeof Carro );
console.log( typeof ferrari );