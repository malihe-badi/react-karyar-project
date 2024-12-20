
import React from 'react';
import './ProductCard.css';
import { CiHeart, CiRepeat, CiRead } from "react-icons/ci";

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
      <p className='product-price'>$ {product.price.toFixed(2)} </p>
      <div className='icon-card'>
      <CiHeart />
      <CiRepeat />
      <CiRead />
      </div>
    </div>
  );
}

export default ProductCard;

