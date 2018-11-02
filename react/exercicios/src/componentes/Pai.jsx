import React from 'react'
// import Filho from './Filho'

import { childrenWithProps } from '../utils/utils'

// function childrenWithProps(props){
//     return React.Children.map( props.children, child => {
//         return React.cloneElement(child, { 
//             ...props, ...child.props
//         })
//     })
// }

export default props => 
<div>
    <h1>{props.nome} {props.sobrenome}</h1>
    <h2>Filhos</h2>
    <ul>
        {/* <Filho nome="Pedro" sobrenome={props.sobrenome} />
        <Filho {...props} />
        <Filho {...props} nome="Carla" /> */}
        {/* {props.children} */}

        {/* Clona os elementos "children" e adiciona as props vindas do "pai" */}
        {
            // Caso exista atributos conflitantes, é possível passar o props do children para que o children se sobreponha aos
            // atributos do pai. Porém, a função "cloneElement" funciona apenas para um único elemento,caso tenha mais de um,
            // devemos utilizar a função "map" do React

            childrenWithProps(props)

            // React.Children.map( props.children, child => {
            //     return React.cloneElement(child, { 
            //         ...props, ...child.props
            //     })
            // })

            // React.cloneElement(props.children, { 
            //     ...props, ...props.children.props
            // })
        }
    </ul>
</div>