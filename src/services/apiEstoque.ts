import axios from "axios";
import React from "react";


async function getEstoque  (divId: HTMLDivElement) {
    const estoqueUrl = "http://localhost:4000/api/estoque";
    await axios.get(estoqueUrl)
    .then((response)=>{
    const dataEstoque: Record<string, {name: string, factory: string, quantity: string} >=
    response.data;

    const dataEstoqueArray = Object.entries(dataEstoque).map(
        ([key, value]) => ({
            key,
            ...value
        }));
    var content = "";
    dataEstoqueArray.forEach((dados)=>{

        content += `
        <div class="FlexPai">

        <div class= "Nome">
        <img src = ${dados.name} alt =""/>
        </div>

        <div class= "Factory">
        <img src = ${dados.factory} alt = ""/>
        </div>

        <div class="Quantity">
        <img src = ${dados.quantity} alt = ""/>
        </div>
        `;
    })
        console.log("Content Estoque", content);
        divId.innerHTML = content;
})

.catch((error)=>{
    console.log("O erro ocorrido foi: ", error)
})

}

function postEstoque(): void{
    console.log("teste")
}

export default {getEstoque, postEstoque};