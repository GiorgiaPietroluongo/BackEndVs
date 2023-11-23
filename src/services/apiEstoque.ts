import axios from "axios";
import React from "react";

async function getEstoque(divId: HTMLDivElement) {
  const estoqueUrl = "http://localhost:4000/api/estoque";
  try {
    const response = await axios.get(estoqueUrl);
    const dataEstoque: Record<
      string,
      { name: string; factory: string; quantity: string }
    > = response.data;

    const dataEstoqueArray = Object.entries(dataEstoque).map(
      ([key, value]) => ({
        key,
        ...value,
      })
    );
    var content = "";
    dataEstoqueArray.forEach((dados) => {
      content += `
        <div class="FlexPai">
          <div class="Nome">
            <img src=${dados.name} alt=""/>
          </div>
          <div class="Factory">
            <img src=${dados.factory} alt=""/>
          </div>
          <div class="Quantity">
            <img src=${dados.quantity} alt=""/>
          </div>
        </div>`;
    });
    console.log("Content Estoque", content);
    divId.innerHTML = content;
  } catch (error) {
    console.log("O erro ocorrido foi: ", error);
  }
}

async function postEstoque(divId: HTMLDivElement) {
    const estoqueUrlPost = "http://localhost:4000/api/estoque";
    try {
     
      const newData = {

        name: 'NovoProduto',
        factory: 'NovaFabrica',
        quantity: '10',
      };
  
      const response = await axios.post(estoqueUrlPost, newData);
  
      console.log("Resposta ao adicionar ao Estoque", response.data);
    } catch (error) {
      console.log("Ocorreu um erro ao adicionar dados ao estoque", error);
    }
  }

export default { getEstoque, postEstoque };
