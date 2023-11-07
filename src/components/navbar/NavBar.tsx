import React, { useEffect } from "react";
import './NavBar.css';
 import Imagem from '../mainImagemVenda/ImagemVenda';
import { Link } from 'react-router-dom';



function NavBar(){

   

        var endereco = document.location.href.split("/")[4];

        var divTitulo = document.getElementById("titulo") as HTMLDivElement;
        
       
       
       
        useEffect(() =>{
    
        if(endereco === "produto"){
            var divProduto = document.getElementById("produto") as HTMLElement;
           divProduto.classList.add("disableLink")
        }else if(endereco === "cliente") {
            var divCliente = document.getElementById("cliente") as HTMLElement;
            divCliente.classList.add("disableLink")
        }else if(endereco === "sobre"){
            var divSobre = document.getElementById("sobre") as HTMLElement;
           divSobre.classList.add("disableLink")
        }else if(endereco === "vendedor"){
            var divVendedor = document.getElementById("vendedor") as HTMLElement;
            divVendedor.classList.add("disableLink")
        }

}, [])

   
    
   
    // console.log(endereco);

    

    return(
        {endereco === "cliente"  ? (<Link to = {"/cadastroCliente"} className="disebleLink">Cliente</Link>)
        : Link to = {"/cadastroCliente"}>Cliente</Link>}
        
    <>
        <div className="FlexPai">

            <div id="titulo">
                titulo
            </div>
      

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
                    <div id="sobre">
                    <Link to={'/sobre'}>
                        Sobre
                    </Link>
                    </div>

                    <div id="cliente">
                    <Link to={'/cadastroCliente'} id="cliente">
                        Cliente
                    </Link>
                    </div>
                    <div id="vendedor">
                    <Imagem/>
                   <Link to={'/cadastroVendedor'} id="vendedor">
                        Vendedor
                   </Link>
                   </div>
                   <div id="produtos">
                   <Link to={'/cadastroProdutos'} id="produtos">
                        Produtos
                   </Link>
                   </div>
                    
                </div>


            
        </div>
        </>
)
}

export default NavBar;