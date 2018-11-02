import React from 'react'
//import React, { Fragment } from 'react'


// o parâmetro pode ser qualquer nome, porém, por convesão, é utilizado o "props"
// sempre que a função devolver mais de uma tag, é necessário coloca-las dentro de uma tag "pai",
// caso não queira que o react renderize as tags dentro de uma tag html, é necessário informa que a tag pai é
// um React.Fragment

// export default props => 
//     <div>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </div>

// outra possibilidade é retornar as tags dentro de um array
// porém, é necessa´rio informar uma chave para cada elemento
export default props => [
    <h1 key='h1'>Bom dia {props.nome}!</h1>,
    <h2 key='h2'>Até breve!</h2>
]

// export default props => 
//     <React.Fragment>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </React.Fragment>


// caso não queira informar a tag React.Fragment inteira, basta colocar no import do react, 
// conforme informado no inicio do documento