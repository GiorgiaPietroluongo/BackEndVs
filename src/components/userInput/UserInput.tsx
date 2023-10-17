import React from "react";
import'./UserInput.css';
import  axios from "axios";


async function userData(){
    var userNameInput = document.getElementById("userName")as HTMLInputElement || null;
    var userLastNameInput = document.getElementById("userLastName")as HTMLInputElement || null;
    var userPhoneInput = document.getElementById("userPhone")as HTMLInputElement || null;
    var userAddressInput = document.getElementById("userAddress")as HTMLInputElement || null;
    var userEmailInput = document.getElementById("userEmail")as HTMLInputElement || null;
    var userCpfInput = document.getElementById("userCpf")as HTMLInputElement || null;
    var newDiv = document.getElementById("newDiv")as HTMLDivElement;
    var vendaUrl = "http://localhost:3000/api/sales";
    var userDataJson = {

        "name": userNameInput.value.toString(),
        "products": userLastNameInput.value.toString(),
        "finishedSales": userPhoneInput.value.toString(),
        "discount": userAddressInput.value.toString(),
        "Sale": userEmailInput.value.toString()
     
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

    await axios.get(vendaUrl, 
       { headers:{
            "Content-type":"application/json",
            Accept:"application/json"
             }
         }
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
            <input type="text" id="userLastName"/>
            </div>
            <div className="body">
                <label>Telefone:</label>
            <input type="text" id="userPhone"/>
            </div>
            <div className="body">
                <label>Endereço:</label>
            <input type="text" id="userAddress"/>
            </div>
            <div className="body">
                <label>E-mail:</label>
            <input type="text" id="userEmail"/>
            </div>
            <div className="body">
                <label>CPF:</label>
            <input type="text" id="userCpf"/>
            </div >
            <button id="sendBtn" onClick={userData}>Enviar</button>
            <br /> <br />

            <div id="newDiv"></div>
        </div>
    )
}

export default UserInput;