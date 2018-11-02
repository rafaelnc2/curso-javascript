import React from 'react'
import ReactDom from 'react-dom'

// na importação de arquivos não é necessário informar a extensão
// react sempre deve ser importado devido ao jsx (que parece html)
// reactdom deve ser importado sempre que tiver alguma renderização na DOM

// IMPORTANTE - TODO COMPONENTE DEVE COMEÇAR COM LETRA MAIÚSCULA para que o react entenda que é um novo
// componente e não uma tag jsx
// import Primeiro from "./componentes/Primeiro"

// import BomDia from './componentes/BomDia'

// quando se exporta mais de uma variável no componente, utilizamos como se fosse um "destructuring assignement" para
// importar as variáveis para dentro da variáveis que queremos
//import { BoaTarde, BoaNoite } from './componentes/Multiplos'

// quando exportamos um objeto, no import não é necessário fazer um "destricturing" podemos 
// importar apenas o objeto e utilizar a notação ponto (.)
//import Multi from './componentes/Multiplos'

// import Saudacao from './componentes/Saudacao'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

// ReactDom.render(<Primeiro />, document.getElementById('root'))
// sempre lembrar de fechar a tag <BomDia />
// sempre que for passar valores que não são string, devemos colocar entre chaves "{}"
// ReactDom.render(<BomDia nome="Rafael" idade={33}/>, document.getElementById('root'))

// ReactDom.render(
//     <div>
//         <Multi.BoaTarde nome="Helena"/>
//         <Multi.BoaNoite nome="Natalia"/>
//     </div>
//     , document.getElementById('root')
// )

// ReactDom.render(
//     <div>
//         <Saudacao tipo="Bom dia" nome="João " />
//     </div>
//     , document.getElementById('root')
// )

ReactDom.render(
    <div>
        {/*<Pai nome="Paulo" sobrenome="Silva" />*/}
        {/* 
            Como passar os compenentes filhos a partir do corpo do pai.
            Caso não queira fixar a quantidade de filhos no componente pai
        */}
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai>
    </div>
    , document.getElementById('root')
)