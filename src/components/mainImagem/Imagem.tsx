/* eslint-disable no-unreachable */
import React, { useEffect} from "react";
import './Imagem.css';
import getVenda from '../../services/api';
import Iphone from '../../components/mainImagem/iphone.jpg';






function Cards() {


    useEffect(()=>{
        var divId = document.getElementById("mainCard") as HTMLDivElement;
        console.log("divId dentro do componente: ", divId);
        getVenda.getVenda(divId);
        console.log(Iphone);
    },[])

    // var divId = document.getElementById("mainCard") as HTMLDivElement;
    // console.log("divId dentro do componente: ", divId);
    // getVenda.getVenda(divId);

    return(
    
        <div id = "mainCard" className="mainCard">
            
        </div>
    );
         


         

}
export default Cards;