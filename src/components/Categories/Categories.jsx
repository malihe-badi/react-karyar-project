import React, { useState, useEffect } from "react";
import {api} from '../../utils/api';
import CategoryList from "./CategoryList";
import ProductList from "../ProductList/ProductList";

 

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null); 

      useEffect(() => {
        api('categories')
          .then(data =>  setCategories(data))
          .catch(error => console.error('error:', error))
      }, []);
    
      
   const handleCategoryClick = (category) => {
    setSelectedCategory(category.id);
   }
    return (
        <div>
            {categories.map((category) => (
                <CategoryList 
                key={category.id}
                 category={category}
                 onClick={() => handleCategoryClick(category)} 
                  />
            ))}
            {selectedCategory && <ProductList categoryId={selectedCategory} />}
        </div>
    );
};
console.log(Categories);
export default Categories;
