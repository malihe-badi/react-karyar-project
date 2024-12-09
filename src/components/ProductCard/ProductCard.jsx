// src/components/ProductCard.js
// src/components/ProductCard.js
import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div key={product._id} className="product-card">
    <img
        className='product-img'
        src={product.images[0]} 
        alt={product.name} 
      />
      <p className="category-name">{product.category.name}</p>
      <h3>{product.name}</h3>
      <p className='product-price'>{product.price.toFixed(2).toLocaleString()} $</p>
    </div>
  );
}

export default ProductCard;

