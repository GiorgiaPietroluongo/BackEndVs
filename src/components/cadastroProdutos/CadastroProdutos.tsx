import React from "react";
import NavBar from '../navbar/NavBar';
import { Link } from 'react-router-dom';
import './CadastroProdutos.css';

function CadastroProdutos(){
    return(
        <div className="body">
            <NavBar/>
            <div className="nome">
                <h5>Nome do produto:</h5>
            </div>
            <div className="inputNome">
                <input type="text" placeholder="Nome"/>
            </div>
            <div className="fabricante">
                <h5>Fabricante:</h5>
            </div>
            <div className="inputFabricante">
                <input type="text" placeholder="abcdefg"/>
            </div>
            <div className="qntdadeVendida">
                <h5>Quantidade vendida:</h5>
            </div>
            <div className="inputQntdadeVend">
                <input type="text" placeholder="123456"/>
            </div>
            <div className="codBarras">
                <h5>Código de barras:</h5>
            </div>
            <div className="inputCodBarras">
                <input type="text" placeholder="12345678910"/>
            </div>
            <div className="btnEnviar">
                <button>Enviar</button>
            </div>


        </div>


    )
}

export default CadastroProdutos;