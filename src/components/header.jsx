import React, { useState } from 'react'; // Importamos useState
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './header.css';

const Header = () => {
  const { cart } = useCart();
  // Estado para el menú móvil
  const [menuAbierto, setMenuAbierto] = useState(false);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // Función para cerrar el menú al hacer clic en un link
  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header className="main-header">
      <div className="header-container">
        <Link to="/" className="logo-group" onClick={cerrarMenu}>
          <img 
            src="/logopngsjlchico.png"
            alt="SJL Logo" 
            className="header-icon" 
          />
          <span className="brand-name">SJL MUEBLES</span>
        </Link>

        {/* Botón Hamburguesa - Solo visible en móvil vía CSS */}
        <button 
          className="menu-hamburger" 
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Abrir menú"
        >
          {menuAbierto ? '✕' : '☰'}
        </button>

        {/* Agregamos la clase dinámica 'active' según el estado */}
        <nav className={`nav-links ${menuAbierto ? 'active' : ''}`}>
          <Link to="/" onClick={cerrarMenu}>Inicio</Link>
          <Link to="/catalogo" onClick={cerrarMenu}>Catálogo</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;