
import React, { useState, useEffect } from 'react';
import ProductCard from "../ProductCard/ProductCard";
import Loading from '../Loading/Loading';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
      try {
        const response = await fetch('https://kaaryar-ecom.liara.run/v1/products');
        const data = await response.json();
        if (Array.isArray(data.products) && data.products.length > 0) {
          setProducts(data.products);  
        }
      } catch (error) {
        console.error('error:', error);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products">
      {loading ? (
        <Loading />
      ) : products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
}

export default ProductList;
