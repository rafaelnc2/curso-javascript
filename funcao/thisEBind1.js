const pessoa = {
    saudacao: "Bom dia!",
    falar(){
        console.log(this.saudacao);
    }
};

pessoa.falar();
const falar = pessoa.falar;
falar(); //conflito de paradigmas - funcional e OO


// bind serve para dizer quem será o this ao executar a função
const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();