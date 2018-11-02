const nums = [1,2,3,4,5,6,7,8,9,10];

for(x in nums){
    if(x == 5) {
        //Este break não age sobre o bloco IF e sim sobre o bloco FOR ou WHILE mais próximo a ele
        break;
    }
    console.log(`${x} = ${nums[x]}`);
}

for(y in nums){
    if(y == 5) {
        continue;
    }
    console.log(`${y} = ${nums[y]}`);
}

//Exemplo com rótulos - APENAS PARA CONHECIMENTO, NUNCA UTILIZAR. Estrutura não recomendada
externo:
for(a in nums){
    for(b in nums){
        if(a==2 && b==3) break externo; //para que o break aja no primeiro FOR
        console.log(`Par = ${a},${b}`) ;
    }
}