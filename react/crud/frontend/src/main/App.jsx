import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import React from 'react';
// import { HashRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

// ao invés de utilizar o "HashRouter" podemos também utilizar o "BrowserRouter". A diferença fica na barra de endereços do navegador
// Com o "BrowserRouter" não é utilizado o "hash (#)" antes da rota, porém, em produção podemos ter problemas no redirecionamento tendo que 
// configurar o servidor (apache, engix...) para entender as rotas

import Routes from './Routes';
import Logo from '../components/template/Logo';
import Nav from '../components/template/Nav';
import Footer from '../components/template/Footer';

// BrowserRouter serve para direcionar a DOM

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>