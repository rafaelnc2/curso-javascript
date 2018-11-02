//Para gerar um novo objeto, sem cache do node, utilizar uma factory pois, ela sempre 
//retorna um novo objeto

module.exports = ()=>{
    return {
        valor: 1,
        inc() {
            this.valor++;
        }
    }
}