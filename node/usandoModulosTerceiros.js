//Quando se referencia um modulo de terceiro, o Node busca automaticamente a pasta node_modules
//Caso não encontre, vai para a pasta de cima e assim até encontrar
//Muito comum quem utiliza a biblioteca loadash referenciar a partir do underline
//Sem colocar o caminho relativo, o node busca dentro de node_modules um arquivo chamado 
//index.js para executar o lodash

//instalando lodash = npm i lodash
//instalando nodemon global = npm i -g nodemon
//com nodemon, é possível deixar a aplicação rodando, fazer alterações no arquivo e ver as alterações em runtime

const _ = require("lodash");
setInterval( () => console.log(_.random(50, 60)), 2000 );