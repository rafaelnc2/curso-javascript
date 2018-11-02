let dobro = function(a){
    return a * 2;
}

dobro = (a) => {
    return a * 2;
}

//nes caso o "return" está implícito
dobro = a => a * 2;

console.log(dobro(Math.PI));

let ola = function(){
    return "Olá!";
}

ola = () => "Olá!"; //forma padrão
ola = _ => "Olá!"; //possui um parametro

console.log(ola());