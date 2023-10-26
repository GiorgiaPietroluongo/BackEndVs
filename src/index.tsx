import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
// import Mensagem from './components/mensagens/Mensagem';
//  import UserInput from './components/userInput/UserInput'
// import Telefone from './components/telefone/Telefone';
// import NavBar from './components/navbar/NavBar';
import Imagem from './components/mainImagem/Imagem';
// import api from './services/api';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    
   
<Imagem/>

  



  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


reportWebVitals();
