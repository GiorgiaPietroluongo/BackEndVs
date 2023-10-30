import React from "react";
import NavBar from '../navbar/NavBar';
import { Link } from 'react-router-dom';

function CadastroVendedor(){
    return(
        <div>

            <div>
                <h5>Nome:</h5>
            </div>
        <div>
            <input type="Vendedor" />
        </div>

        <div>
            <h5>Código:</h5>
        </div>
        <div>
            <input type="Codigo" />
        </div>
        
        </div>
    )
}

export default CadastroVendedor;