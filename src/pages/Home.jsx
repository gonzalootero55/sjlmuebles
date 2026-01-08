// src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de tener esta importación si usas <Link>
import './Home.css'; // Asegúrate de tener los estilos necesarios

const Home = () => {
  return (
    <div className="home-page">
      {/* Banner Principal - Debe tener una etiqueta de cierre o ser autocerrable */}
      <section className="hero-banner">
        <h1>Diseño y Confort para tu Hogar</h1>
        <p>Descubre nuestra colección exclusiva de muebles modernos.</p>
        <Link to="/catalogo" className="btn-primary">Ver Catálogo</Link>
        {/* Si usaste una etiqueta de imagen, asegúrate de que sea autocerrada: <img ... /> */}
      </section>

      {/* Si tienes más JSX, verifica que esté bien estructurado */}
    </div>
  );
};  

export default Home;