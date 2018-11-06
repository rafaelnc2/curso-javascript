import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default props => 
    <aside className="menu-area">
        <nav className="menu">
            {/* refatorar - criar componente para os itens do menu (nav-item) */}
            <Link to="/">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link to="/users">
                <i className="fa fa-users"></i> Usuários
            </Link>
        </nav>
    </aside>