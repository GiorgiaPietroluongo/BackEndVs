/* eslint-disable no-unreachable */
import React, { useEffect} from "react";
import './ImagemVenda.css';
import getVenda from '../../services/apiVenda';







function Cards() {


    useEffect(()=>{
        var divId = document.getElementById("mainCard") as HTMLDivElement;
        // console.log("divId dentro do componente: ", divId);
        getVenda.getVenda(divId);
       
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