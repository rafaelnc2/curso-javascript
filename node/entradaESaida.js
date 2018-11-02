//Verifica se na chamada do modulo, via terminal, existe o parametro '-a'
//node entradaESaida -a
const anonimo = process.argv.indexOf("-a") !== -1;
//console.log(anonimo);

if(anonimo){
    process.stdout.write("Fala Anonimo!\n");
    process.exit();
}else{
    process.stdout.write("Informe o seu nome: ");
    //Ao digitar o nome e teclar "Enter"
    process.stdin.on("data", data => {
        //o data recebe inclusive o "Enter" (\n) teclado no final
        // const nome = data.toString().replace('\n',''); //remove "Enter"
        const nome = data.toString();
        
        process.stdout.write(`Fala ${nome}!!\n`);
        process.exit();
    });
}