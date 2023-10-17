import React from "react";
import'./UserInput.css';
import  axios from "axios";


 function userData(){
    var userNameInput = document.getElementById("userName")as HTMLInputElement || null;
    var userProductsInput = document.getElementById("userProducts")as HTMLInputElement || null;
    var userFinishedSaleInput = document.getElementById("userfinishedSale")as HTMLInputElement || null;
    var userDiscountInput = document.getElementById("userDiscount")as HTMLInputElement || null;
    var userSaleInput = document.getElementById("userSale")as HTMLInputElement || null;
    var newDiv = document.getElementById("newDiv")as HTMLDivElement;
    var vendaUrl = "http://localhost:4000/api/sales";
    var userDataJson = {

        "name": userNameInput.value.toString(),
        "products": userProductsInput.value.toString(),
        "finishedSales": userFinishedSaleInput.value.toString(),
        "discount": userDiscountInput.value.toString(),
        "Sale": userSaleInput.value.toString()
     
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

     axios.get(vendaUrl, 
        // { 
        //  headers:{

        //     "Access-Control-Allow-Origin": "*",
        //     "Access-Control-Allow-Headers": "Authorization", 
        //     "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
        //     "Content-Type": "application/json;charset=UTF-8"
        //     // 'Access-Control-Allow-Origin' : '*',
        //     // 'Connection': "keep-alive",
        //     // 'Sec-fetch-dest':"no-cors",
        //     // 'Mode': 'no-cors',
        //     // "sec-fetch-mode": "cors",
        //     // "sec-fetch-dest": "empty",
        //     // "sec-fetch-site": "cross-site",



         // 'Access-Control=Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTION'
        //       },
        //   }
     ).then ((response) =>{
       newDiv.innerHTML = `${response.data}`;
    })
 }


function UserInput(){
    return(
        <div className="userInputMain">
            <div className="body">
                <label>Nome:</label>
            <input type="text" id="userName"/>
            </div>
            <div className="body">
                <label>Sobrenome:</label>
            <input type="text" id="userProducts"/>
            </div>
            <div className="body">
                <label>Telefone:</label>
            <input type="text" id="userfinishedSale"/>
            </div>
            <div className="body">
                <label>Endereço:</label>
            <input type="text" id="userDiscount"/>
            </div>
            <div className="body">
                <label>E-mail:</label>
            <input type="text" id="userSale"/>
            </div>
            
            <button id="sendBtn" onClick={userData}>Enviar</button>
            <br /> <br />

            <div id="newDiv"></div>
        </div>
    )
}

export default UserInput;