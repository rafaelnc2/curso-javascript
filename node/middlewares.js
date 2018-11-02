//Middleware pattern (Chain of responsability)

const passo1 = (ctx, next)=>{
    ctx.valor1 = "mid1";
    next();
};

const passo2 = (ctx, next) => {
    ctx.valor2 = "mid2";
    next();
};

const passo3 = (ctx) => ctx.valor3 = "mid3";

//Função recebe o contexto e um conjunto de funções a serem executadas
const exec = (ctx, ...middlewares) => {
    //Criada uma nova função reponsável pela execução dos passos
    //Essa função recebe como atributo o indice que será executado
    const execPasso = indice => {
        //1 - verifica se o array passado está setado
        //2 - verifica se o indice passado está dentro do array de passos
        //3 - executa a função que está dentro do array no indice informado, passando como parâmetro o contexto atual
        //    e será passado também a função que será executada em seguida, ou seja, a função será recursiva (chama ela mesma)
        //    mas passando o indice mais um (indice + 1)
        middlewares && indice < middlewares.length && middlewares[indice](ctx, () => execPasso(indice + 1));
    };
    //Criada a função, ela deve ser chamada com o primeiro indice a ser executado, nesta caso, indice zero
    execPasso(0);
};

//Criando o objeto que será o contexto para as funções
const ctx = {};
//Invocando a função exec informado o contexto criado e passando as funções e a ordem que devem ser executadas
exec(ctx, passo1, passo2, passo3);

//Lembrando que o passo3 é a ultima funções pois, não chama a próxima
//Chamando apenas ela, apenas ela será executada
console.log(ctx);