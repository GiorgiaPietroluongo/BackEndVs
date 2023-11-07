import React, { useEffect } from "react";
import './NavBar.css';
 import Imagem from '../mainImagemVenda/ImagemVenda';
import { Link } from 'react-router-dom';



function NavBar(){

   

        
       // var divTitulo = document.getElementById("titulo") as HTMLDivElement;
        
       
       
       
        useEffect(() =>{
            var endereco = document.location.href.split("/")[4];
    
        if(endereco === "cadastroProdutos"){
            var divProduto = document.getElementById("produto") as HTMLDivElement;
           divProduto.classList.add("disableLink")
        }else if(endereco === "cadastroCliente") {
            var divCliente = document.getElementById("cliente") as HTMLDivElement;
            divCliente.classList.add("disableLink")
        }else if(endereco === "sobre"){
            var divSobre = document.getElementById("sobre") as HTMLDivElement;
           divSobre.classList.add("disableLink")
        }else if(endereco === "cadastroVendedor"){
            var divVendedor = document.getElementById("vendedor") as HTMLDivElement;
            divVendedor.classList.add("disableLink")
        }

}, [])

   
    
   
    // console.log(endereco);

    

    return(
        // {endereco === "cliente"  ? (<Link to = {"/cadastroCliente"} className="disebleLink">Cliente</Link>)
        // : (<Link to = {"/cadastroCliente"}>Cliente</Link>)}
        
    <>
        <div className="FlexPai">

            {/* <div id="titulo">
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
                </div> */}

                <div>
                    <div id="sobre">
                    <Link to={'/sobre'}>
                        Sobre
                    </Link>
                    </div>

                    <div id="cliente">
                    <Link to={'/cadastroCliente'} >
                        Cliente
                    </Link>
                    </div>
                    <div id="vendedor">
                    <Imagem/>
                   <Link to={'/cadastroVendedor'} >
                        Vendedor
                   </Link>
                   </div>
                   <div id="produto">
                   <Link to={'/cadastroProdutos'} >
                        Produtos
                   </Link>
                   </div>
                    
                </div>


            
        </div>
        </>
)
}

export default NavBar;