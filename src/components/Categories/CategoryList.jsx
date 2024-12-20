import React from "react";
import Input from "../Input/Input";
import './CategoryList.css';

const CategoryList = ({ category , onClick }) => {
    return (
        <div className="category-list" onClick={onClick}>
            <label>
                <Input type="checkbox" /> {category.name} ({category.productCount})
            </label>
        </div>
    );
};

export default CategoryList;
