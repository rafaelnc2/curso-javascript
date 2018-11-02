console.log( 7 / 0 ); //Divisão por zero devolve Infinity
console.log('10' / 2); //5
console.log('3' + 2); // 32 - neste caso, a string tem preferencia pois o javascript entende que faz sentido concatenar 
console.log('3' - 2); //neste caso, não tem como concatenar nada então faz a substração
console.log("Show" * 2); // Not a Number NaN
console.log( 0.1 + 0.7 ); // 0.799999999999 -> Imprecisão
//console.log( 10.toString() );
console.log( (10.345).toFixed(2) );