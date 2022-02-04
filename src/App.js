import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Disclaimer from './components/Disclaimer';

function App() {
  /*Renderizado*/
  return (
    <BrowserRouter>  
      <Disclaimer/>    
      <NavBar/>         
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;