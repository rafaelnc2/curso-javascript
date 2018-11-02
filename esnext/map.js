//Outra forma de criar objeto com chaves e valores
//Forma interessante porém não substitui o objeto
//Map aceita funcção como sendo chave para valores
const tecnologias = new Map();
tecnologias.set("react", { framework: false });
tecnologias.set("angular", { framework: true });

console.log( tecnologias.react );
console.log( tecnologias.get("react") );
console.log( tecnologias.get("react").framework );

const chavesVariadas = new Map([
    [function(){}, "Função"],
    [{}, "Objeto"],
    [123, "Número"]
]);

chavesVariadas.forEach((vl, ch) => {
    console.log( ch, vl );
});

//Verifica se a chave está ou não contida no Map
console.log( chavesVariadas.has(123) );
chavesVariadas.delete(123);
console.log( chavesVariadas.has(123) );

//verifica a quantidade de elementos no Map
console.log( chavesVariadas.size );

//Não é possível ter chaves duplicadas. Se tentar declarar a mesma chave duas vezes, 
//o ultimo valor será o valor da chave
chavesVariadas.set(123, 'a');
chavesVariadas.set(123, 'b');
console.log( chavesVariadas );