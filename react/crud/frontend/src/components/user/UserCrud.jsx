import React, { Component } from 'react';
import axios from 'axios';
import Main from '../template/Main';

// criado os valores iniciais para a tela
const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}

const baseUrl = "http://localhost:3001/users";
const initialState = {
    user: { name: '', email: '' },
    list: []
}

export default class UserCrud extends Component {

    // inicia o state do componente
    state = { ...initialState };

    componentWillMount(){
        // função que será executada antes do componente ser renderizado, exibido na tela
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear(){
        // função resposável por limpar o formulário
        // limpa apenas os dados do usuário nos campos e não a lista de usuários
        this.setState({ user: initialState.user });
    }

    save(){
        // será utilizado para incluir um novo usuário e alterar um usuário existente
        const user = this.state.user;
        // identifica se é uma inserção ou uma alteração validando se existe um "id" setado para o usuário
        const method = user.id ? 'put' : 'post';
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;

        // faz a requisição com o axios na url e aguarda o retorno da promise
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data);
                // após a gravação, limpa os campos e atualiza a lista de usuários
                this.setState({ user: initialState.user, list });
            })
    }

    getUpdatedList(user, add = true){
        // como o filter gera uma nova lista, não é necessário clonar a lista inicial
        // pega todos os usuários com o id diferente do que foi passado, ou seja, está removendo o usuário parâmetro da lista
        const list = this.state.list.filter(u => u.id !== user.id);

        // inclui o usuário do parâmetro na primeira posição da lista
        if(add) list.unshift(user);

        return list;
    }

    updateField(event){
        // clonando o usuário do state para não precisar alterar o state
        // cria uma nova referência para evoluir o componente
        const user = { ...this.state.user };
        user[event.target.name] = event.target.value;
        // seta o novo valor para o state
        this.setState({ user });
    }

    renderForm(){
        // função para renderizar o formulário
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control" 
                                    name="name" 
                                    value={this.state.user.name}
                                    onChange={e => this.updateField(e)}
                                    placeholder="Digite o nome" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control" 
                                    name="email" 
                                    value={this.state.user.email}
                                    onChange={e => this.updateField(e)}
                                    placeholder="Digite o e-mail" />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <buttton className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </buttton>
                        <buttton className="btn btn-secondary ml-2"
                            onClick={e => this.save(e)}>
                            Cancelar
                        </buttton>
                    </div>
                </div>
            </div>
        )
    }

    load(user){
        this.setState({ user })
    }

    remove(user){
        axios.delete(`${baseUrl}/${user.id}`).then( resp => {
            // const list = this.state.list.filter(u => u !== user);
            const list = this.getUpdatedList(user, false);
            this.setState({ list });
        })
    }

    renderTable(){
        return(
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows(){
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(user)}>
                            <i className="fa fa-pencil" />
                        </button>
                        <button className="btn btn-danger"
                            onClick={() => this.remove(user)}>
                            <i className="fa fa-trash" />
                        </button>
                    </td>
                </tr>
            )
        })
    }
    render(){
        return (
            <Main { ...headerProps }>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}