const funcs = [];

for( var i = 0; i < 10; i++ ){
    funcs.push(
        function(){
            console.log(i);
        }
    )
}

funcs[2]();
funcs[8]();

/*
    Como a variável i foi declarada através do var, ela não tem escopo de bloco, sendo assim, ao chamar a função
    será impresso o ultimo valor de i atribuido no loop, no caso 10
*/