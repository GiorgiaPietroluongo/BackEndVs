import React from "react";
import NavBar from '../navbar/NavBar';
import { Link } from 'react-router-dom';
import './CadastroCliente.css';
import '../../services/apiUser';

function CadastroCliente(){

    return(
        <div className="body">
            <NavBar/>
            <div className="nome">
            <h5>Nome:</h5>
            </div>
           

            <div id="inputNome">
                <input type="Nome" placeholder="Nome"/>
            </div>
            <div id="inputLastName">
                <input type="Sobrenome" placeholder="Sobrenome"/>
            </div>
            <div id="inputGenero">
                <input type="Gênero" placeholder="Gênero"/>
            </div>

            <div id="datanasc">
                <h5>Data de Nascimento</h5>
            </div>

            <div id="inputData">
                <input type="dd/mm/aaaa" placeholder="dd/mm/aaaa"/>
            </div>
            <div id="inputEmail">
                <input type="E-mail" placeholder="E-mail"/>
            </div>
            <div id="inputEstado">
                <input type="Estado" placeholder="Estado"/>
                <input type="Cidade" placeholder="Cidade"/>
            </div>
            <div id="cpf">
                <h5>CPF</h5>
            </div>

            <div id="inputCpf">
                <input type="000.000.000-00" placeholder="000.000.000-00"/>
            </div>
            <div id="telefone">
                <h5>Telefone</h5>
            </div>
            <div id="inputPhone">
                <input type="(00)00000 0000" placeholder="(00)00000 0000"/>
            </div>

        </div>

    )
}

export default CadastroCliente;
