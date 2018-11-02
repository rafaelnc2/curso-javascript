//Arquivos SASS
//importando o index, importa todas as despenências especificadas dentro do arquivo
import "./scss/index.scss";

//Dependencias
//quando a extensão do arquivo não é informada, o webpack entende que se trata de um arquivo "js"
//quando a extensão é informada, o webpack utiliza um dos loaders predefinidos para interpretar o arquivo
import "jquery";
import "bootstrap";

//Meus arquivos js
import "./js/core/includes";

import "./js/plugins/cityButtons";