import React from "react";
import "./TopSelling.css" ;


const TopSellingList = ({ product} ) => {
    const { name, price, images, category } = product;
     return(
        <div className="top-selling-list">
            <div className="top-selling" >
            <img
            src={images[0] } 
            alt={name} 
           />
           <div className="top-selling-info">
             <span className="category-name">{category?.name}</span>
            <h5 className="product-name">{name }</h5>
            <p className="product-price">${price?.toFixed(2)}</p>
           </div>
            </div>
         
       
      
        </div>
     )
};

export default TopSellingList;