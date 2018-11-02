function soBoaNotica( nota ){
    if( nota >= 7 ){
        console.log("Aprovado com " + nota);
    }
}

soBoaNotica(8.1);
soBoaNotica(6.1);

function seForVerdade( valor ){
    if(valor){
        console.log("É verdade..." + valor);
    }
}

seForVerdade();
seForVerdade(null);
seForVerdade(undefined);
seForVerdade(NaN);
seForVerdade("");
seForVerdade(0);
seForVerdade(-1);
seForVerdade(" ");
seForVerdade("?");
seForVerdade([]);
seForVerdade([1,2]);
seForVerdade({});