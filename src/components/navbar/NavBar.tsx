import React from "react";
import './NavBar.css';
 import Imagem from '../mainImagemVenda/ImagemVenda';
import { Link } from 'react-router-dom';



function NavBar(){

    return(
        

        <div className="FlexPai">
      

            <div className="category">
                <label>Category</label>
            </div>

            <div className="outhers">
                <label>Outhers</label>
            </div>

            <div className="contacts">
                <label>Contacts</label>
            </div>

            
            <div className="Botao">
                
                <button> Login</button>
            </div>

            <div className="descriptionSamsung">
                  
                   <label>
                   Samsung Galaxy s5 - 2015
                   </label>
                </div>

                        
                <div className="descriptionNokia">
                
                <label>
                Nokia Lumia 1320
                </label>
                </div>

                <div className="descriptionLG">
                
                <label>
                LG Leon 2015
                </label>   
                </div>

                <div className="descriptionsony">
                 
                <label>
                Sony Microsoft
                </label>    
                </div>

                <div className="descriptionIphone">
                
                <label>
                Iphone 6
                </label>     
                </div>

                <div>
                    <Link to={'/cadastroCliente'}>
                        Cliente
                    </Link>
                    <Imagem/>
                   <Link to={'/cadastroVendedor'}>
                    Vendedor
                   </Link>
                   <Link to={'/cadastroProdutos'}>
                    produtos
                   </Link>
                    
                </div>


            
        </div>
)
}

export default NavBar;