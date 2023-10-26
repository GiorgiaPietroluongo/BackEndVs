import React from "react";
import { json } from "stream/consumers";
import './NavBar.css';
// import getVenda from '../../services/api';



async function NavBar(){

    return(
        

        <div className="FlexPai">

        <div className="home">
            <label>Home </label>
        </div>

        <div className="shop">
            <label>Shop </label>
        </div>

        <div className="products">
            <label>Products </label>
        </div>

        <div className="checkout">
            <label>Checkout </label>
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

        
        <div className="Botão">
            
            <button> Login</button>
        </div>


        </div>




)

}


export default NavBar;


        
