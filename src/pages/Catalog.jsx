import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const Catalog = () => {
  const [products] = useState([
    { id: 1, name: "Pin Hora de Aventura", price: "$15.000", image: "/images/adeventure_time" },
    { id: 2, name: "Producto 2", price: "$15", image: "https://via.placeholder.com/150" },
    // Agrega más productos aquí
  ]);

  return (
    <div className="catalog-container">
      <h1>Catálogo de Productos</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;