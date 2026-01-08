// src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de tener esta importación si usas <Link>
import './Home.css'; // Asegúrate de tener los estilos necesarios
import toldoImg from '../images/Toldocorredizo.jpeg';
import quinchoImg from '../images/MESADA QUINCHO.jpeg';

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

      <section className="proyectos-section">
  <h2 className="section-title">Nuestros Proyectos</h2>
  
  <div className="proyectos-container">
    {/* Proyecto 1 */}
    <div className="proyecto-card">
      <div className="proyecto-image">
        <img src={toldoImg} alt="Quincho Moderno" />
      </div>
      <div className="proyecto-info">
        <h3>TOLDO CORREDIZO</h3>
        <p>Toldo corredizo en estructural cuadrado y lona, para parrilla "La Escondida "</p>
      </div>
    </div>

    {/* Proyecto 2 */}
    <div className="proyecto-card">
      <div className="proyecto-image">
        <img src={quinchoImg} alt="Oficina Minimalista" />
      </div>
      <div className="proyecto-info">
        <h3>Mesa de trabajo de acero inoxidable con doble tarja</h3>
        <p>Mesa de acero inoxidable con dos tarjas integradas y estructura metálica resistente. Ideal para cocinas industriales, restaurantes o áreas de lavado.</p>
      </div>
    </div>
  </div>
</section>
</div>



  );
};  

export default Home;