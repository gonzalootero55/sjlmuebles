// src/pages/ProductList.jsx

import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import Filters from '../components/Filters'; // Asumiendo que crearás este componente
import './ProductList.css';
const ProductList = () => {
  const [productList, setProductList] = useState(products);
  const [filters, setFilters] = useState({ category: 'Todos', minPrice: 0 });

  // Lógica de filtrado simple (ejemplo)
  const filteredProducts = productList.filter(product => {
    const categoryMatch =
      filters.category === 'Todos' || product.category === filters.category;
    const priceMatch = product.price >= filters.minPrice;
    return categoryMatch && priceMatch;
  });

  return (
    <div className="product-list-page">
      <h2>Catálogo de Muebles</h2>
      <div className="content-layout">
        <aside className="sidebar">
          <Filters setFilters={setFilters} currentFilters={filters} />
        </aside>
        <main className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No hay productos que coincidan con los filtros.</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default ProductList;
