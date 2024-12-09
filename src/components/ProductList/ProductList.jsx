// src/components/ProductList.js
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

        console.log('داده‌های دریافت‌شده:', data.products);

        if (Array.isArray(data.products) && data.products.length > 0) {
          setProducts(data.products);  // توجه به products درون داده‌ها
        } else {
          console.warn('هیچ محصولی پیدا نشد.');
        }
      } catch (error) {
        console.error('خطا در دریافت داده‌ها:', error);
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
          <ProductCard key={product._id} product={product} />
        ))
      ) : (
        <p>محصولی برای نمایش وجود ندارد.</p>
      )}
    </div>
  );
}

export default ProductList;
