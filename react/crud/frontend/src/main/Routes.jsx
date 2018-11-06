import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Home from '../components/home/Home';
import UserCrud from '../components/user/UserCrud';

export default props =>
    // comando switch funciona como um switch normal e cada route seria seus cases
    // path - url chamada
    // exact - para pegar exatamente a rota descrita. No exemplo abaixo, caso não usasse o exact,o react se perderia pois,
    // as duas rotas começam com "/"
    // Redirect - funciona como um "default" do switch. Caso a rota não seja nenhuma das especificadas acima,
    // será redirecionada para a rota descrita no "to" 
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={UserCrud} />
        <Redirect from="*" to="/" />
    </Switch>