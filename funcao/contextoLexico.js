const valor = "Global";

function minhaFuncao(){
    console.log(valor);
}

function exec(){
    const valor = "local";
    minhaFuncao();
}


// Ao executar a função exec, será impresso Global, pois a função carrega consigo, 
// todo o contexto onde a mesma foi criada portanto o Global
exec();