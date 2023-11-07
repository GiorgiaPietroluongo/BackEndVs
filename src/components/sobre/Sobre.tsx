import React from "react";
import NavBar from '../navbar/NavBar';
import { Link } from 'react-router-dom';
import './Sobre.css';

function Sobre(){
    return(
        <div className="body">
            <div className="sobreNos">
                <h2>
                    Sobre Nós
                </h2>
            </div>
            <div className="numCntt">
                <h5>
                    Número de contato
                </h5>
            </div>
            <div className="redesScs">
                <h5>
                    Redes Sociais
                </h5>
            </div>
            <div className="email">
                <h5>
                    E-mail
                </h5>
            </div>
            <div className="centralDvds">
                Central de Dúvidas
            </div>
        </div>
    )
}

export default Sobre;