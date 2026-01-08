// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Componentes
import Header from './components/header';
import Footer from './components/footer';

// Páginas
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import ShoppingCart from './pages/ShoppingCart';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<ProductList />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
         
          {/* En caso de ruta no encontrada */}
          <Route path="*" element={<h2>Página no encontrada</h2>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
