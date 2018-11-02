const porta = 3003;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bancoDeDados = require("./bancoDeDados");

//Utilizando app.use, tudo o que vem dentro da função será utilizada em todas as requisições
//Verifica se a requisição tem dados no formato "url encoded" e faz um parser/transforma no body para transformar em objeto
app.use(bodyParser.urlencoded({ extended: true }));
//"exteded: true" é para informar que será utilizado no modo extendido, sem isso da um erro dizendo que está depreciado


//Apenas um exemplo de função middleware
// app.get("/produtos", (req, res, next)=>{
//     console.log("Middleware 1");
//     next();
// });

//Usando "use" qualquer requisição passará por está funcção, não importa qual url chamar
// app.use((req, res, next)=>{
//     //Informa qual será a resposta para a requisição
//     res.send(console.log("Função use")); //Será convertido para JSON
// });

//Cria uma reuisição HTTP do tipo GET
//Pega todos os produtos cadastrados
app.get("/produtos", (req, res, next)=>{
    //Neste caso, como não é utilizada a função "next" podemos retirar do código
    //Informa qual será a resposta para a requisição
    //res.send({ nome: "Notebook", preco: 123.45 }); //Será convertido para JSON
    res.send(bancoDeDados.getProdutos());
});
//Pega apenas o produto com o Id especifico
app.get("/produtos/:id", (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id));
});

//Cria uma requisição HTTP do tipo POST
app.post("/produtos", (req, res, next)=>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    });
    res.send(produto); //converte o objeto em JSON para retornar
});

//Cria uma requisição HTTP do tipo PUT
app.put("/produtos/:id", (req, res, next)=>{
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    });
    res.send(produto); //converte o objeto em JSON para retornar
});

//Cria uma requisição HTTP do tipo DELETE
app.delete("/produtos/:id", (req, res, next)=>{
    const produto = bancoDeDados.excluirProduto(req.params.id);
    res.send(produto); //converte o objeto em JSON para retornar
});

//Informa qual porta o servidor está rodando e invoca um função callback para dizer se está tudo certo
app.listen(porta, ()=>{
    console.log(`Servidor está executando na porta ${porta}`);
});