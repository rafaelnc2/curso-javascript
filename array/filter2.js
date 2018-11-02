Array.prototype.filter2 = function(callback){
    const newArray = [];
    for(let i=0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i]);
        }
    }
    return newArray;
};

const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true },
    { nome: "IPad", preco: 4199, fragil: true },
    { nome: "Copo de vidro", preco: 12.49, fragil: true },
    { nome: "Copo de plástico", preco: 18.99, fragil: false }
]

const produtoCaro = e => (e.preco > 500);
const produtoFragil = e => (e.fragil === true);

const newArray = produtos.filter2(produtoCaro).filter2(produtoFragil);
console.log(newArray);