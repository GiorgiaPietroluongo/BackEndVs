import axios from "axios";
import React from "react";

async function getUser(divId: HTMLDivElement) {
  const userUrl = "http://localhost:4000/api/user";
  try {
    const response = await axios.get(userUrl);
    const dataUser: Record<string, { name: string; lastName: string; genero: string;
    dataNasc: string; email: string; estado: string; cidade: string; cpf: string; telefone: string }> =
      response.data;

    const dataUserArrayGet = Object.entries(dataUser).map(
      ([key, value]) => ({
        key,
        ...value
      }));

    var content = "";
    dataUserArrayGet.forEach((dados) => {
      content += `
        <div class="FlexPai">
          <div class="Name">${dados.name}</div>
          <div class="LastName">${dados.lastName}</div>
          <div class="Genero">${dados.genero}</div>
          <div class="DataNasc">${dados.dataNasc}</div>
          <div class="Email">${dados.email}</div>
          <div class="Estado">${dados.estado}</div>
          <div class="Cidade">${dados.cidade}</div>
          <div class="Cpf">${dados.cpf}</div>
          <div class="Telefone">${dados.telefone}</div>
        </div>`;
    });

    console.log("Conteúdo do Usuário", content);
    divId.innerHTML = content;
  } catch (error) {
    console.log("Ocorreu um erro ao obter dados do usuário", error);
  }
}

async function postUser(divId: HTMLDivElement) {
  const userUrlPost = "http://localhost:4000/api/user";

  var userInputname = document.getElementById()
  try {
    
    const newData = {
      name: 'Gi',
      lastName: 'Holig',
      genero: 'Feminino',
      dataNasc: '24/07/2006',
      email: 'gigizinha@gmail.com',
      estado: 'RJ',
      cidade: 'Terecity',
      cpf: '098.765.543-09',
      telefone: '(21)98769-9876',
    };

    const response = await axios.post(userUrlPost, newData
        );

    console.log("Resposta ao adicionar ao Usuário", response.data);
  } catch (error) {
    console.log("Ocorreu um erro ao adicionar dados ao usuário", error);
  }
}

export default { getUser, postUser };
