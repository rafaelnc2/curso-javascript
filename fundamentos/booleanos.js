let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1; // 1 = true; 0 = false
console.log(!isAtivo); //! significa negação, então a pergunta é: O que não é true? é false
console.log(!!isAtivo); //! significa negação, com duas negações, a pergunta é: O que não é não true? é true

console.log("Os verdadeiros...");
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("Os falsos...");
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("Para finalizar...");
console.log(!!('' || null || 0 || ' ')); // verdadeiro pois pelo menos uma das condições é verdadeira
console.log(('' || null || 'epa' || NaN)); // retorno o valor verdadeiro

let nome = '';
console.log(nome || "Desconhecido"); //quando avariavel nome estiver em branco/false, imprime Desconhecido pois o nome esta vazio