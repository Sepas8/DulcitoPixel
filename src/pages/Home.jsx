import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bienvenido a Dulcito Pixel</h1>
      <p>Descubre nuestros productos únicos y creativos.</p>
      
      <div className="cta-buttons">
        <Link to="/catalogo" className="btn">Ver Catálogo</Link>
        <Link to="/contacto" className="btn">Contacto</Link>
      </div>

      <div className="featured-products">
        <h2>Productos Destacados</h2>
        {/* Aquí puedes agregar un carrusel o cards de productos destacados */}
      </div>
    </div>
  );
};

export default Home;