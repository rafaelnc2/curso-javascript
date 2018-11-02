//utilizando o import no formato do ECMAScript 2015
//importando o modulo jQuery
import $ from "jquery";

const loadHtmlSuccessCallBack = [];

// função que é chamada sempre que um "HTML" é carregado com sucesso
export function onLoadHtmlSuccess(callback){
    // cria uma lista de callback que devem ser executadas ao invés de fazer o eval
    if(!loadHtmlSuccessCallBack.includes(callback)){
        // valida se a função ja existe no array e, caso contrário, adiciona
        loadHtmlSuccessCallBack.push(callback);
    }
}

function loadInclude( parent ){
    if(!parent) parent = "body";
    $(parent).find("[wm-include]").each( function(i, e){
        const url = $(e).attr('wm-include');
        $.ajax({
            url,
            success(data){
                $(e).html(data);
                //exclui a propriedade do elemento para que a mesma não seja interpretada novamente - evitar possíveis erros
                $(e).removeAttr("wm-include");

                loadHtmlSuccessCallBack.forEach(callback => callback(data))

                //chama novamente a função para o caso de no html encontrado na "url" existe algum elemento "wm-include" 
                //que também deve ser interpretado
                loadInclude(e);
            }
        })
    })
}
//chama vazio para que o primeiro elemento seja o "body"
loadInclude();