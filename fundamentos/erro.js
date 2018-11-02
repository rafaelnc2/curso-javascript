function tratarErroELancar(erro){
    // throw new Error("...");
    // throw 10;
    // throw "mensagem";
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
        // Tenta executar o código
        console.log(obj.name.toUpperCase() + "!!!" );

    }catch( e ){
        // Entra no catch caso apresente algum erro
        tratarErroELancar(e);

    }finally{
        // de qualquer forma, após tratar o erro, entra no finally
        console.log("Final");
    }
}

const obj = { nome: "Rafael" };
imprimirNomeGritado(obj);