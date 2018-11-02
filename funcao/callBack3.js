// Exemplo de callback no browser

// o parametro 'e' dentro da function é um evento, porém, não é obrigatório
// No exemplo abaixo, o evento é o click do mouse sobre a tag body
document.getElementsByTagName('body')[0].onclick = function( e ){
    console.log("O evento ocorreu!");
}