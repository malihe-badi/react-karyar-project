import React from "react";
import Input from "../Input/Input";
import './CategoryList.css';

const CategoryList = ({ category }) => {
    return (
        <div className="category-list">
            <label>
                <Input type="checkbox" /> {category.name} ({category.productCount})
            </label>
        </div>
    );
};

export default CategoryList;
