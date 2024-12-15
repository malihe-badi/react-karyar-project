// src/pages/Home.js
import React from 'react';
import ProductList from '../components/ProductList/ProductList';
import Sidebar from '../components/Sidebar/Sidebar';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
       <Sidebar  /> 
      <ProductList />
    </div>
  );
}

export default Home;
