import React from 'react';

import { useState, useEffect  } from 'react';

import { Form, Button } from 'react-bootstrap';

function Pedidoss(){

    const [pedidosc, setPedidosc] = useState([]);
    const [render, setRender] = useState(false);
    const [elementos, setElementos] = useState(false);

    useEffect(() => {
        async function fetchData(){
            const url = "http://localhost/Backend/backend/seuspedidos/banco_de_dados/pedidoEntrada.php";
            const response = await fetch(url);
            setPedidosc(await response.json());
        }fetchData();
    }, [render]);

    async function controleEnvio(event) {
        event.preventDefault();


        let formData = new FormData(event.target);

        const url = "http://localhost/Backend/backend/seuspedidos/banco_de_dados/pedidoSaida.php";

        fetch(url, {
            method: "POST",
            body: formData
        }).then((response) => response.json()).then((dados) => {
            setRender(!render);
            setElementos(dados);
            setTimeout(() => {
                setElementos(false)
              }, 3000);

        });
    }
    
    return(

            <div className="col-lg-6 col-md-6 mx-auto  w-23 p-3">
                <div className="col-lg-8 mx-auto">
                
                    <Form onSubmit={controleEnvio}>
                        <h4>Fazer Pedidos</h4>
                        <Form.Group>
                            <Form.Label>Nome:</Form.Label>
                            <Form.Control  type="text" id="cliente" name="cliente" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Endereço:</Form.Label>
                            <Form.Control  type="text" id="endereco" name="endereco" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Telefone:</Form.Label>
                            <Form.Control  type="text" id="tel"  name="tel" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Produto:</Form.Label>
                            {/* <Form.Control  type="text" id="nome_do_produto" /> */}
                            <select className="col-lg" name="nome_do_produto" id="nome_produto">
                                <option value="">Escolha seu produto </option>
                                <option value="Geladeira 1">geladeira personalizada</option>
                                <option value="Geladeira 2">Geladeira 2</option>
                                <option value="Geladeira 3">Geladeira 3</option>
                                <option value="Fogão 1">Fogão 1</option>
                                <option value="Fogão 2">Fogão 2</option>
                                <option value="Micro-ondas 1">Micro-ondas 1</option>
                                <option value="Micro-ondas 2">Micro-ondas 2</option>
                                <option value="Micro-ondas 3">Micro-ondas 3</option>
                                <option value="Lava-louça 1">Lava-louça 1</option>
                                <option value="Lava-louça 2">Lava-louça 2</option>
                                <option value="Lavadora de roupas 1">Lavadora de roupas 1</option>
                                <option value="Lavadora de roupas 2">Lavadora de roupas 2</option>
                            </select><br/><br/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Valor Unitário:</Form.Label>
                            <Form.Control  type="text" id="valor_unitario" name="valor_unitario" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Quantidade:</Form.Label>
                            <Form.Control  type="text" id="quantidade" name="quantidade" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                          realizar seu pedido
                        </Button>
                    </Form>

                    
                </div>
                  
    

                { 
                    elementos && <div className="alert alert-success mx-auto mt-4 w-75" role="alert">
                    Obrigada por seu pedido!
                    </div>
                }

                <div className="col-lg-8 mx-auto">
                    <div>
                        <div>
                            {pedidosc.map((item) =>{
                                    return(

                                        <div className="col-lg-12" key={item.cliente}>
                                            <div>
                                                <hr/>
                                                <hr/>
                                                Sr(a) {item.cliente}, o valor total da sua compra foi de: R$ {item.valor_total}
                                                <hr/>
                                                <hr/>
                                            </div><br/><br/>
                                        </div>
                                    )
                            })}
                        </div> <br/><br/>
                    </div>
                </div>
         </div>   
    );
}
export default Pedidoss;
