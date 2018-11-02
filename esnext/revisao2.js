//Arrow function
//vantagens:
//  Menos linhas de código, não é necessário colocar o "return" que fica implicito
//Função anônima = não tem como colocar um nome
//quando temo apenas um parâmetro, não é necessário colocar os parenteses
//quando a função tem um corpo, é necessário colocar o "return"
const soma = (a, b) => a + b;
console.log(soma(2,3));

//Arrow function = this
//o "this" na arrow function está associado ao escopo onde a função foi escrita
//quando a função é escrita dentro do módulo, o "this" sempre irá apontar pa "exports"
const lexico1 = () => console.log( this === exports );
const lexico2 = lexico1.bind({});
lexico1();
lexico2();
//em uma função normal, o "this" aponta para global, sendo assim, no exemplo acima
// o "this" em "lexico1" apontaria para global e no "lexico2" apontaria para o objeto indicado
//em uma função normal, o "this" pode variar de acordo com a chamada da função ou pode mudar no caso de mudança do contexto 
//utilizando o "bind", "call" ou "apply"

//Parâmetros default
function log(texto = "Node"){
    console.log(texto);
}
log();
log("Sou mais forte");

//Operador rest / spread
//Agrupar parâmetros em um único array
function total(...numeros){
    let total = 0;
    numeros.forEach(n => total += n);
    return total;
}
console.log( total(2,3,4,5) );