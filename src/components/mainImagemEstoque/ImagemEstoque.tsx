import React, { useEffect} from "react";
import './ImagemEstoque.css';
import getEstoque from '../../services/apiEstoque';

function Cards(){

    useEffect(()=>{
        var divId = document.getElementById("mainCardEstoque") as HTMLDivElement;
        console.log("divId dentro do componente: ", divId);
        getEstoque.getEstoque(divId);

    },[]);

    return(
        <div id="mainCardEstoque" className="mainCardEstoque">

        </div>
    );

}

export default Cards;