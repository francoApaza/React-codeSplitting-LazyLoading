import React from 'react';

function Lojas(){
    return(
      <main>

      <div className="container-fluid">
        
            <h1>Nossas lojas</h1>
           

            <hr/>
            <div className="container-fluid">             
                <div className="row">
                    <div className="col">
                        <h3>Rio de Janeiro</h3>
                        <p>Avenida Presidente Vargas, 5999</p>
                        <p>10 &ordm; andar</p>
                        <p>Centro</p>
                        <p>(21) 9999-7777</p>
                    </div>

                    <div className="col">
                        <h3>São Paulo</h3>
                        <p>Avenida Paulista, 984</p>
                        <p>3 &ordm; andar</p>
                        <p>Jardins</p>
                        <p>(21) 9988-8888</p>
                    </div>

                    <div className="col">
                        <h3>Santa Catarina</h3>
                        <p>Rua Major Ávila, 370</p>
                        <p>1 &ordm; andar</p>
                        <p>Vila Mariana</p>
                        <p>(11) 9999-7777</p>
                        <br/><br/><br/><br/><br/>
                        <br/><br/><br/>
                    </div>
                </div>
            </div>
        </div>
      </main>


    );
}
export default Lojas;

