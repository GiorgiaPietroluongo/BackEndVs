import React from "react";
import NavBar from '../navbar/NavBar';
import { Link } from 'react-router-dom';
import './CadastroVendedor.css';

function CadastroVendedor(){
    return(
       
        <div className="body">
             <NavBar/>

            <div className="nome">
                <h5>Nome do vendedor:</h5>
            </div>
        <div className="inputNome">
            <input type="Nome do vendedor" placeholder="Nome" />
        </div>

        <div className="codigoVend">
            <h5>Código do vendedor:</h5>
        </div>
        <div className="inputCodVend">
            <input type="Codigo" placeholder="000.000"/>
        </div>
        <div className="horarioEnt">
        <h5>Horário de entrada:</h5>
        </div>
        <div className="inputHorarioEnt">
            <input type="text" placeholder="00:00"/>
        </div>
        <div className="horarioSai">
            <h5>Horário de saída:</h5>
        </div>
        <div className="inputHorarioSai">
            <input type="text" placeholder="00:00"/>
        </div>
        <div className="totalVendas">
            <h5>Total de vendas:</h5>
        </div>
        <div className="inputTtlVend">
            <input type="text" placeholder="R$00.000"/>
        </div>
       
        </div>
    )
}

export default CadastroVendedor;