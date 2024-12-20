
import React, { useState, useEffect } from 'react';
import ProductCard from "../ProductCard/ProductCard";
import Loading from '../Loading/Loading';
import {api} from '../../utils/api';
import './ProductList.css';

const ProductList = ({ categoryId }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
  useEffect(() => {
    api(`products?categoryId=${categoryId}`)
      .then(data => setProducts(data.products))
      .catch(error => setError("Error:", error))
      .finally(() => setLoading(false)); 
  }, [categoryId]);


  if(loading) return <Loading />
  if (error) return <p>{error}</p>;
 if (products.length === 0 ) return <p>No products available.</p>
 
  return (
    <div className="products">
      { products.map((product) => (
          <ProductCard 
          key={product.id} 
          product={product} 
          />
        ))
       }
    </div>
    
  );
}

export default ProductList;
