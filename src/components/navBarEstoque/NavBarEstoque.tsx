import React from "react";
import { json } from "stream/consumers";

async function NavBarEstoque(){

    return(

        <div className="FlexPai">

            <div className="Name">
                <label>Nome</label>
            </div> 

            <div className="Factory">
                <label>Fábrica </label>
            </div>

            <div className="Quantity">
                <label>Quantidade </label>
            </div>

        </div>
    )
}

export default NavBarEstoque;