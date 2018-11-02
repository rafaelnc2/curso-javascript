// Javascript não suporta SOBRECARGA DE MÉTODOS. 
// Não é possível criar a mesma função com parâmetros diferentes a não ser que seja nas funções GET e SET

const sequencia = {
    _valor: 1, //Conveção. O uso do _ (underline) no inicio da variável indica que ela apenas será utilizada dentro do objeto

    get valor(){ return this._valor++; },
    set valor(valor){
        if( valor > this._valor ){
            return this._valor = valor;
        }
    }
}

console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 900;
console.log(sequencia.valor, sequencia.valor);