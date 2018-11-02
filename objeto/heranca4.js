function MeuObjeto(){};
// Prototype de função sempre é um objeto
console.log( MeuObjeto.prototype );

const obj1 = new MeuObjeto;
const obj2 = new MeuObjeto;

// Todos os objetos criados a partir de uma mesma função construtora apontam para um mesmo prototipo a partir do atributo __proto__
console.log( obj1.__proto__ === obj2.__proto__ );
console.log( MeuObjeto.prototype === obj1.__proto__);

MeuObjeto.prototype.nome = "Anônimo";
MeuObjeto.prototype.falar = function(){
    console.log( `Bom dia! Meu nome é ${this.nome}` );
}

obj1.falar();

obj2.nome = "Rafael";
obj2.falar();

const obj3 = {}; // inicialmente o prototype é Object.prototype
obj3.__proto__ = MeuObjeto.prototype; // Alterando o prototype para o MeuObjeto.prototype
obj3.nome = "obj3";
obj3.falar();

// Resumindo a loucura...
console.log( (new MeuObjeto).__proto__ === MeuObjeto.prototype );
console.log( MeuObjeto.__proto__ === Function.prototype );
console.log( Function.prototype.__proto__ === Object.prototype );
// IMPORTANTE: Quando se cria um objeto a partir de uma função, esse objeto criado tem um prototipo apontando para Function.prototype
console.log( Object.prototype.__proto__ === null );
// Object.prototype.__proto__ === null => null pois não existe nenum objeto depois de Object.prototype