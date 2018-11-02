//Operador Rest(juntar) / Spread(espalhar)
//Usar Rest como parâmetro de função

//Usar spread com objeto
const funcionario = { nome: "maria", salario: 12348.99 };
const clone = { ativo: true, ...funcionario };
//cria o objeto "clone" e espalha todos os atributos do objeto "funcionario" dentro dele
//o fato de alterar o objeto "clone" não altera o objeto "funcionario"
console.log( clone );

//Usar spread com um array
const grupoA = [ "João", "Pedro", "Gloria" ];
const grupoFinal = ["Maria", ...grupoA, "Natalia"];
console.log(grupoFinal);