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

        const dataVenda: Record<string, {user: string, products: string,
             finishedSale: string, discount:string, Sale:string}> =
             response.data;
               
             const dataVendaArray = Object.entries(dataVenda).map(
                ([key, value])=>({
                    key,
                    ...value
                }));
                console.log(dataVendaArray[1]);

                dataVendaArray.forEach((i)=>{
                    console.log("Nome: "+i.user);
                   
                    console.log("Produtos: "+ i.products);
                   
                    console.log("Compra final: "+i.finishedSale);
                   
                    console.log("Desconto:"+i.discount);
                   
                    console.log("Venda: "+i.Sale);
                });

                //
                //Mesma coisa 

                // myFunction(){
                //   return textSpanEnd;
                // }

                // () => myFunction(){

                // }
                //




        // var teste =[];
       
        
        // teste = Object.keys(response.data);
        // console.log (teste.map((response: any) =>{
        //     return response;
        // }));

        // var teste = response.data;
        // console.log(teste.map((ola:any)=>{
        //     const {user}= ola;
        // }));

        newDiv.innerHTML = `
        <div>
            Nome: ${dataVendaArray[0].user}
        </div>
        
        <div>
            Produtos: ${dataVendaArray[0].products} 
        </div>
       
        <div>
            Compra final: ${dataVendaArray[0].finishedSale} 
        </div>
        
        <div>
            Desconto: ${dataVendaArray[0].discount}
        </div>
       
        <div>
            Compra: ${dataVendaArray[0].Sale} 
        </div>
        <br />
        <div>
            Nome: ${dataVendaArray[1].user}
         </div>
        
        
         <div>
            Produtos: ${dataVendaArray[1].products} 
        </div>
        
        <div>
            Compra final: ${dataVendaArray[1].finishedSale} 
        </div>
       
        <div>
            Desconto: ${dataVendaArray[1].discount}
        </div>
       
        <div>
            Compra: ${dataVendaArray[1].Sale} 
        </div>
        <br />
        <div>
            Nome: ${dataVendaArray[2].user}
        </div>
        
        <div>
            Produtos: ${dataVendaArray[2].products} 
        </div>
       
       
        <div>
            Compra final: ${dataVendaArray[2].finishedSale} 
        </div>
       
        <div>
            Desconto: ${dataVendaArray[2].discount}
        </div>
        
        <div>
            Compra: ${dataVendaArray[2].Sale} 
        </div>
        <br />
        <div>
            Nome: ${dataVendaArray[3].user}
        </div>
       
        <div>
            Produtos: ${dataVendaArray[3].products} 
        </div>
       
        <div>
            Compra final: ${dataVendaArray[3].finishedSale} 
        </div>
        
        <div>
            Desconto: ${dataVendaArray[3].discount}
        </div>
       
        <div>
            Compra: ${dataVendaArray[3].Sale} 
        </div>
        <br />
        <div>
            Nome: ${dataVendaArray[4].user}
        </div>
       
        <div>
            Produtos: ${dataVendaArray[4].products} 
        </div>
        
        <div>
            Compra final: ${dataVendaArray[4].finishedSale} 
        </div>
        
        <div>
            Desconto: ${dataVendaArray[4].discount}
        </div>
        
        <div>
            Compra: ${dataVendaArray[4].Sale} 
        </div>
        `;
    }).catch((error) => {
      
    console.log("Erro na requisição:", error);
       
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