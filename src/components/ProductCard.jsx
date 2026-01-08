// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ProductCard = ({ product }) => {
  const { id, name, price, imageUrl } = product;

  return (
    <Link to={`/producto/${id}`} className="card-link" style={{ textDecoration: "none", color: "inherit" }}>
      <div className="product-card">
        <img
          src={imageUrl}
          alt={name}
          style={{ width: '100%', borderRadius: '8px' }}
        />

        <h3>{name}</h3>
        

        <button className="btn-detail">
          Ver detalles
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
