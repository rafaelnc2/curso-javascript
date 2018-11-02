//Prestar a atenção no nome do arquivo a ser importado, respeitar as letras maiusculas e minusculas
const moduloA = require("../../moduloa");
console.log(moduloA.ola);

//Obs.: Tudo o que está dentro da pastas node_modules são os pacotes instalados através do npm

const saudacao = require("saudacao");
console.log(saudacao.ola);
//Para chamar modulos que estão dentro de node_modules, não é necessário colocar o caminho relativo
//baasta char o nome da pasta/modulo

const c = require("./pastaC");
console.log(c.ola2);

// const http = require("http");
// http.createServer(
//     (req, res) => {
//         res.write("Bom dia!");
//         res.end();
//     }
// ).listen(8080);