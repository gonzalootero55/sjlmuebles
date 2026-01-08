// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // usamos tu contexto
import './header.css';
const Header = () => {
  const { cart } = useCart();

  // Contamos la cantidad total de productos en el carrito
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="main-header">
  <div className="header-container">
    <Link to="/" className="logo-group">
      <img 
        src="/logopngsjlchico.png"
        alt="SJL Logo" 
        className="header-icon" 
      />
      <span className="brand-name">SJL MUEBLES</span>
    </Link>

    <nav className="nav-links">
      <Link to="/">Inicio</Link>
      <Link to="/catalogo">Catálogo</Link>
    </nav>
  </div>
</header>
  );
};

export default Header;
