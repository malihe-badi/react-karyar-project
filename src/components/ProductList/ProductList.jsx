
import React, { useState, useEffect } from 'react';
import ProductCard from "../ProductCard/ProductCard";
import Loading from '../Loading/Loading';
import fetchlist from './Requests';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
 
  const fetchProducts = async () => {
      try {
        const data = await fetchlist(); 
          setProducts(data.products);  
       
      } catch (error) {
        console.error('error:', error);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchProducts();
  }, []);

  if(loading) return <Loading />
 if (products.length === 0 ) return <p>No products available.</p>

  return (
    <div className="products">
      { products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
       }
    </div>
  );
}

export default ProductList;
