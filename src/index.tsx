import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
// import Mensagem from './components/mensagens/Mensagem';
//  import UserInput from './components/userInput/UserInput'
// import Telefone from './components/telefone/Telefone';
// import NavBar from './components/navbar/NavBar';
import Imagem from './components/mainImagemVenda/ImagemVenda';
// import api from './services/api';
import NavBar from './components/navbar/NavBar';
// import ImagemEstoque from './components/mainImagemEstoque/ImagemEstoque';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import UserInput from './components/userInputVenda/UserInput';
import Mensagem from './components/mensagens/Mensagem';
import CadastroCliente from './components/cadastroCliente/CadastroCliente';
import CadastroVendedor from './components/cadastroVendedor/CadastroVendedor';
import CadastroProdutos from './components/cadastroProdutos/CadastroProdutos';
import Sobre from './components/sobre/Sobre';
// import NavBarEstoque from './components/navBarEstoque/NavBarEstoque';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    
<>
    {/* <NavBar/> */}
    <BrowserRouter basename='/pi'>
      <Routes>
        <Route path='/' element={<NavBar/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
        <Route path='/cadastroCliente' element={<CadastroCliente/>}/>
        <Route path='/cadastroVendedor' element={<CadastroVendedor/>}/>
        <Route path='/cadastroProdutos' element={<CadastroProdutos/>}/>
        <Route path='*' element={<Mensagem/>}/>
       
      
      </Routes>
    </BrowserRouter>
   
    {/* <Imagem/>
    <ImagemEstoque/> */}

</>     

  



  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


reportWebVitals();
