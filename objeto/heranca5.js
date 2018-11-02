console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

//É possível adicionar mais funções / atributos em um prototype
String.prototype.reverse = function(){
    return this.split('').reverse().join('');
};
console.log( "Escola Cod3r".reverse() ); 

Array.prototype.first = function(){
    return this[0];
};
console.log( [1,2,3,4,5].first() );
console.log( ['a','b','c'].first() );

// Sobrescrevendo uma funcção ja existente no protótipo -- NÃO É INDICADO, POIS PODE TER EFEITOS COLATERAIS IDESEJADOS
String.prototype.toString = function(){
    return "Lascou tudo!";
};
console.log( "Escola Cod3r".reverse() ); 