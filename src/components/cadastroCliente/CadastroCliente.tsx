import React from "react";
import NavBar from '../navbar/NavBar';
import { Link } from 'react-router-dom';
import './CadastroCliente.css';

function CadastroCliente(){

    return(
        <div className="body">
            <div className="nome">
            <h5>Nome:</h5>
            </div>
           

            <div className="inputNome">
                <input type="Nome" />
            </div>
            <div className="inputLastName">
                <input type="Sobrenome" />
            </div>
            <div className="inputGenero">
                <input type="Gênero" />
            </div>

            <div className="datanasc">
                <h5>Data de Nascimento</h5>
            </div>

            <div className="inputData">
                <input type="dd/mm/aaaa" />
            </div>
            <div className="inputEmail">
                <input type="E-mail" />
            </div>
            <div className="inputEstado">
                <input type="Estado" />
                <input type="Cidade" />
            </div>
            <div className="cpf">
                <h5>CPF</h5>
            </div>

            <div className="inputCpf">
                <input type="000.000.000-00" />
            </div>
            <div className="telefone">
                <h5>Telefone</h5>
            </div>
            <div className="inputPhone">
                <input type="(00)00000 0000" />
            </div>

        </div>

    )
}

export default CadastroCliente;
