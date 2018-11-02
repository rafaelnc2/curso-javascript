const fs = require("fs");

const caminho = __dirname + "/arquivo.json";

//Síncrono...
//Leitura síncrona não é interessante pois, o sistema fica travado até que a leitura seja terminada
//pode ocasionar o travamento do EventLoop
const conteudo = fs.readFileSync(caminho, "UTF-8");
console.log(conteudo);

//Assíncrono...
fs.readFile(caminho,"UTF-8", (error, conteudo)=>{
    //a variável "error" deve ser testada para o caso de algum problema no retorno
    const config = JSON.parse(conteudo); //transformando a string em JSON
    console.log(`${config.db.host}:${config.db.port}`);
});

//Se tratando de um JSON, não é preciso fazer todo este caminho para fazer a leitura 
//basta a penas chemar o arquivo a partir de um "require"
const config = require("./arquivo.json");
console.log(config.db);

//É possível também fazer a leitura de uma pasta e todo o seu conteúdo
fs.readdir(__dirname, (error, arquivos)=>{
    console.log("Conteúdo da pasta...");
    console.log(arquivos)
});