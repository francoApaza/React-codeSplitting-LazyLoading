
import React from 'react';
import './styles.css';

const Footer = () => {
    return (

        <footer>
        <div>
        <p className="nav justify-content-center text-danger" id="cor_destaque">Formas de Pagamentos:</p>

        <div className="nav justify-content-center"> 

            <img width="30%" src="./img/formasdepagamento.png" alt="Formas de pagamento"/> 

        </div>

        <p className="col text-white text-center bg-primary" id="recodepro">&copy;Recode Pro</p>
        <br/>
        
        </div>
            
    </footer>
    );
}

export default Footer;
