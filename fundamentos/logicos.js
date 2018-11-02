function compras(trabalho1, trabalho2){
    //Quando é utilizado o operador lógico OU (||) 
    const comprarSorvete = trabalho1 || trabalho2; 
    //se o primeiro parâmetro for verdadeiro, não há necessidade de analisar o segundo
    //Quando é utilizado o operador lógico E (&&)
    const comprarTv50 = trabalho1 && trabalho2; 
    //o segundo parâmetro só deve ser analisado quando o primeiro for FALSE
    //const comprarTv32 = !!(trabalho1 ^ trabalho2); //bitwise xor
    //É um operador bit a bit, funciona como um OU EXCLUSIVO onde apenas é aceito quando os 
    //dois parâmetros são analisados e tem resultados iguais
    const comprarTv32 = trabalho1 != trabalho2;
    //A diferença também funciona como um OU EXCLUSIVO
    const manterSaudavel = !comprarSorvete; //Operador UNÁRIO = envolve a análise de apenas um parâmetro

    //NOVA FORMA DE RETORNAR UM OBJETO - ES2015
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel };
    //Não é necessário informar a chave para o valor. Desta forma, o JavaScript ja entende que 
    //a chave é o mesmo nome da variável que contém o valor assumido acima
}

console.log(compras(true,true));
console.log(compras(true,false));
console.log(compras(false,true));
console.log(compras(false,false));