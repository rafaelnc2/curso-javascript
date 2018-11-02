{ 
    {
        { 
            { 
                var sera = "Será??"; 
            } 
        } 
    } 
}
console.log(sera);

function teste(){
    var local = 123;
}
teste();
console.log(local);

//Criando uma variável, mesmo que seja dentro de um bloco que não seja FUNCTION, ela fica acessível em todo o sistema (GLOBAL)
//Criando uma variável dentro de uma FUNCTION, ela somente é visivel no escopo da FUNCTION que foi criada