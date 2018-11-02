const obj = { a:1, b:2, c:3, soma(){return a + b + c;}}
//Transforma o objeto em JSON, porém, ignora a função, pois o jSON é formato textual de dados, diferente de um objeto
console.log( JSON.stringify(obj) );

//console.log( JSON.parse( "{a:1, b:2, c:3}" ) );
//console.log( JSON.parse( "{'a':1, 'b':2, 'c':3}" ) );
//JSON válido sempre se inicia com aspas simples e para identificar seus atributos, deve ser utilizada as aspas duplas
console.log( JSON.parse( '{"a":1, "b":2, "c":3}' ) );
console.log( JSON.parse( '{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }' ) )