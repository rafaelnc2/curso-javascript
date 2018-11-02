import React from 'react'


// quando se usa o "export" sem o "default", devemos informar o nome do que será exportado
// no exemplo abaixo, será exportada a variável "BoaTarde" 
// quando utiizamos o "export default" não é necessário nomear, apenas passar o que deverá ser exportado

// export const BoaTarde = props => <h1>Boa tarde {props.nome}!</h1>
const BoaTarde = props => <h1>Boa tarde {props.nome}!</h1>

// export const BoaNoite = props => <h1>Boa noite {props.nome}!</h1>
const BoaNoite = props => <h1>Boa noite {props.nome}!</h1>

// outra possibilidade de exportar sem utilizar o default
export { BoaTarde, BoaNoite }

// outra possibilidade é exportar um objeto com as duas propriedades
export default { BoaTarde, BoaNoite }