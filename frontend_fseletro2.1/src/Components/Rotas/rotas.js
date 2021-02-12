import React from 'react';
import {BrowserRouter , Switch, Route } from 'react-router-dom';

import PaginaIni from '../../Pages/Home';
import Produtos from '../../Pages/Produtos/Produtos';
import Lojas from '../../Pages/Pastalojas';
import Contatos from '../../Pages/Contato';
import Pedidoss from '../../Pages/Seuspedidos';

// ;import PaginaIni from '../../Pages/Home';




// import Pedido from './Pages/Pedidos';

// import Mudar from './Pages/PastaMudar';
// import Produtinhos from './Pages/PastaProdutinhos';

// import Produtos from '../Pages/Produtos';


function Rotas() {
    return (
        <Switch>
            <Route exact path="/" component={PaginaIni} />
            {/* <Route exact path="/" component={Produtos} /> */}

            <Route exact path="/PaginaIni" component={PaginaIni} />
            <Route exact path="/Produtos" component={Produtos} />
            <Route exact path="/Lojas" component={Lojas} />
            {/* <Route exact path="/pedidos" component={Pedidos} /> */}
            <Route exact path="/Contatos" component={Contatos} />
            <Route exact path="/Pedidoss" component={Pedidoss} />
            {/* <Route exact path="/Produtinhos" component={Produtinhos} /> */}
            {/* <Route exact path="/Mudar" component={Mudar} /> */}

            {/* <Route exact path="/Pedidoss" component={Pedidoss} /> */}

            {/* <Route exact path="/Pedido" component={Pedido} /> */}


        </Switch>
    );
}

export default Rotas;