import React, { Component } from 'react'

// utilizar classes permite que o sejam executadas ações antes de renderizar o compponente e 
// ao destruir o componente
// Sempre que utilizarmos classe, devemos importar também a classe "Component" do react
export default class Saudacao extends Component {

    // O "props" é somente leitura, sendo assim, não é possível alterar seus valores.
    // Para que o valor de dentro de um componente seja atualizado, devemos alterar o seu "state"
    // Em React, a única forma de alterar um componente é alterando o seu estado a partir de um evento.
    // Só é possível alterar o "state" a partir da função "setState". 

    //inicializando o state com os dados vindos do "props"
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    //É possível inicializar o "state" com o operador "spread"
    //state = { ...this.props }


    // Para iniciar a classe com um construtor, sempre devemos passar "props" como parâmetro
    constructor(props){
        // dentro do construtor, sempre devemos fazer a referência a classe "super" (neste caso classe "Component") 
        // passando "props" como parâmetro para manter a compatibilidade
        super(props)
        // this.state = {
        //     tipo: this.props.tipo,
        //     nome: this.props.nome
        // }
        this.setTipo = this.setTipo.bind(this)
        this.setNome = this.setNome.bind(this)
    }


    // O evento "onChange" chama a função "setTipo" passando o próprio evento como parâmetro
    // neste exemplo, esta função é a responsável por alterar o "state" do componente e, consequentemente, 
    // altera o seu valor na tela
    setTipo(e){
        this.setState({ tipo: e.target.value })
        // this.props.tipo = e.target.value
    }
    // QUEM MANDA NA RENDERIZAÇÃO DO COMPONENTE É O ESTADO, E NÃO OS COMPONENTES VISUAIS DA TELA!!!!

    setNome(e){
        this.setState({ nome: e.target.value })
    }

    render(){

        // diferente da função que recebe "props" como parâmetro, na classe ele é referenciado através do "this.props"
        // acionando o props que está na instância da classe
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}</h1>
                <hr />

                {/* <input type="text" placeholder="Tipo..." value={tipo} onChange={e => this.setTipo(e)}/>
                <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)}/> */}

                {/* 
                    Caso não queira utilizar uma função arrow, devemos tratar o "this" no construtor com o bind, caso contrário, 
                    o "this" apontará para "undefined"
                */}
                <input type="text" placeholder="Tipo..." 
                        value={tipo} 
                        onChange={this.setTipo}/>
                <input type="text" placeholder="Nome..." 
                        value={nome} 
                        onChange={this.setNome}/>
            </div>
        )
        // quando se cria um tipo "input" ele fica "somente leitura", para fazer que ele possa ser alterado,
        // é necessário criar uma função do tipo "onchange" para que ela escute as alterações feitas no 
        // input
    }

}