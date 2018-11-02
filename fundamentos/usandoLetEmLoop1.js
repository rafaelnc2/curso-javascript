for( let i=0; i < 10; i++ ){
    console.log(i);
}

console.log("i = ", i);
/*
    Gera um erro pois a variável i foi declarada através do let, que tem seu escopo apenas no bloco em que foi declarada, 
    neste caso, no bloco do for
*/