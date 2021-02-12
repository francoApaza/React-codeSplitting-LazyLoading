
import React from 'react';
import {useState, useEffect} from 'react';
import './celula.css';


export default function Produtos() {
    
    const aumentar = (event) => {
        if (event.target.style.width === "240px") {
            event.target.style.width = "120px";
        }
        else {
            event.target.style.width = "240px";
        }
    }
    
    const diminuir = (event) => {
        if (event.target.style.width === "120px") {
            event.target.style.width = "240px";
        }
        else {
            event.target.style.width = "120px";
        }
    }
     
    const [ produtos, setProdutos ] = useState([]);
    useEffect(() => {
        async function fetchData(){
            // const resposta = await fetch("http://localhost/Backend/backend/produtosssss/")---php---
            const resposta = await fetch("http://localhost:8080/produtos")

            const dados = await resposta.json()
            setProdutos(dados);
        }
        fetchData();   
    }, []); 

    function exibir_todos() {
        let elementos = document.getElementsByClassName('celula');
        for(let i=0; i<elementos.length; i++){
            elementos[i].style="display:inline-block";
        }
    }

    function exibir_categorias(categoria) {
        let elementos = document.getElementsByClassName('celula');
        for(let i = 0; i < elementos.length; i++){
            if (categoria === elementos[i].children[0].id)
                elementos[i].style="display: inline-block";
            else
                elementos[i].style="display:none";
        }
    }
    
    return(
        <div className="container-fluid">

        <div className="jumbotron fluid bg-light my-0 py-0">
            <div className="container-fluid col-sm-6 col-md-9 py-0 my-0">
                <div>
                    <h1>Nossos produtos</h1>
                    <p>
                    <a class="nav-link disabled" href="#"><b>Categorias : </b></a>
                    </p>
                    <ul class="nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#"> <button className="list-group-item list-group-item-action border-0 p-1" onClick={exibir_todos} href="#">todos (12)</button></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"> <button className="list-group-item list-group-item-action border-0 p-1" onClick={()=>exibir_categorias('geladeira')} href="#">Geladeiras (3)</button></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"> <button className="list-group-item list-group-item-action border-0 p-1" onClick={()=>exibir_categorias('fogao')} href="#"> Fogões (2)</button></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"> <button className="list-group-item list-group-item-action border-0 p-1" onClick={()=>exibir_categorias('micro-ondas')} href="#">Micro-ondas (3)</button></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"> <button className="list-group-item list-group-item-action border-0 p-1" onClick={()=>exibir_categorias('lavadora')} href="#">Lavadoras (2)</button></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"> <button className="list-group-item list-group-item-action border-0 p-1" onClick={()=>exibir_categorias('lava-louca')} href="#">Lava-louças (2)</button></a>
                        </li>
                        
                    </ul>

                </div>
            </div>
        </div>




        <div className="album py-5 bg-light  card-columns ">
            <div className="container-fluid">

            {produtos.map((item) =>{
                        const preco = item.preco.toFixed(2)
                        const precofinal = item.precofinal.toFixed(2)

                        return(

                            <div className="celula   container">
                            {/* <div className="col-md-4"> */}
                                <div className="card mb-4 mt-4 pt-4 shadow-sm" key={item.idproduto} id={item.categoria}>
                                    {/* <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap"/> */}
                                    <img className="rounded mx-auto d-block" onMouseOver={aumentar}  onMouseOut={diminuir} style={{width:120}} src={require(`./img/${item.imagem}`).default} alt={item.categoria}  />
                                    <div className="card-body">
                                    <p className="card-text">{item.descricao}</p>
                                    <div className="preco_antigo text-center">
                                    R${preco}
                                    </div>
                                    <div className="preco text-center ">
                                    R${precofinal}
                                    </div>

                                    <div className="d-flex justify-content-center pt-3 align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-info">Ver</button>
                                            <button type="button" className="btn btn-sm btn-outline-success">Comprar</button>
                                        </div>                                  
                                    </div>
                                    </div>
                                </div>
                            {/* </div> */}
                        </div>

                        )            
                    })}
            </div>
        </div>
            
        </div>
    )
}

