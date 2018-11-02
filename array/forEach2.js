//Implementando um novo forEach

//O prototype recebe uma nova função
//Essa função recebe como parametro uma nova função (callback)
Array.prototype.forEach2 = function(callback){
    //para cada uma das iterações do array
    for(let i = 0; i < this.length; i++){
        //é chamado o callback passando três parâmetros,
        //o valor atual, o indice atual e o array completo
        callback(this[i], i, this);
    }
};

const aprovados = [ "Agatha", "Aldo", "Daniel", "Raquel" ];

aprovados.forEach2(function(nome, indice){
    console.log( `${indice + 1}) ${nome}` );
});