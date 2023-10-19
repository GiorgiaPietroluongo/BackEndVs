import React from "react";
import'./UserInput.css';
import  axios from "axios";
import { json } from "stream/consumers";


 function userData(){
    var userNameInput = document.getElementById("userName")as HTMLInputElement || null;
    var userProductsInput = document.getElementById("userProducts")as HTMLInputElement || null;
    var userFinishedSaleInput = document.getElementById("userfinishedSale")as HTMLInputElement || null;
    var userDiscountInput = document.getElementById("userDiscount")as HTMLInputElement || null;
    var userSaleInput = document.getElementById("userSale")as HTMLInputElement || null;
    var newDiv = document.getElementById("newDiv")as HTMLDivElement;
    var vendaUrl = "http://localhost:4000/api/venda";

    var userDataJson = {

        "user": userNameInput.value,
        "products": userProductsInput.value,
        "finishedSales": userFinishedSaleInput.value.toString(),
        "discount": userDiscountInput.value.toString(),
        "Sale": userSaleInput.value
     
    }

    // newDiv.innerHTML = `
    //     <div>
    //     Nome: ${userNameInput.value}
    //     </div>
    //     <div> 
    //     Sobrenome: ${userLastNameInput.value}
    //     </div>
    //     <div> 
    //     Telefone: ${userPhoneInput.value}
    //     </div>
    //     <div> 
    //     Endereço: ${userAddressInput.value}
    //     </div>
    //     <div>
    //     Email: ${userEmailInput.value} 
    //     </div>
    //     <div>
    //     CPF: ${userCpfInput.value} 
    //     </div>
    // `;
    
    // axios.post(salesPersonUrl,userDataJson )
    // .then((response)=>{
    //     newDiv.innerHTML = `${response.data}`;
    // })

     axios.get(vendaUrl)
     .then ((response) =>{
        // var teste =[];
       

        // teste = Object.keys(response.data);
        // console.log (teste.map((response: any) =>{
        //     return response;
        // }));

        var teste = response.data;
        console.log(teste.map((ola:any)=>{
            const {user}= ola;
        }));
        
        newDiv.innerHTML = `
        <div>
        Nome: ${response.data.user}
        </div>
        <div>
        Produtos: ${response.data.products} 
        </div>
        <div>
        Compra final: ${response.data.finishedSale} 
        </div>
        <div>
        Desconto: ${response.data.discount}
        </div>
        <div>
        Compra: ${response.data.Sale} 
        </div>`;
    }).catch((error) => {
      
    console.error("Erro na requisição:", error);
       
    });
 }


function UserInput(){
    return(
        <div className="userInputMain">
            <div className="body">
                <label>Nome:</label>
            <input type="text" id="userName"/>
            </div>
            <div className="body">
                <label>Produtos:</label>
            <input type="text" id="userProducts"/>
            </div>
            <div className="body">
                <label>Compra final:</label>
            <input type="text" id="userfinishedSale"/>
            </div>
            <div className="body">
                <label>Desconto:</label>
            <input type="text" id="userDiscount"/>
            </div>
            <div className="body">
                <label>Compra:</label>
            <input type="text" id="userSale"/>
            </div>
            
            <button id="sendBtn" onClick={userData}>Obter</button>
            <br /> <br />

            <div id="newDiv">

            </div>
        </div>
    )
}

export default UserInput;