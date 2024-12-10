
import React from 'react';
import './ProductCard.css';

const ProductCard = ({product}) => {
  return (
    <div className="product-card">
    <img
        className='product-img'
        src={product.images[0]} 
        alt={product.name} 
      />
      <p className="category-name">{product.category.name}</p>
      <h3>{product.name}</h3>
      <p className='product-price'>{product.price.toFixed(2)} $</p>
    </div>
  );
}

export default ProductCard;

