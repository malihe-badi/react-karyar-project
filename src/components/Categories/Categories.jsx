import React, { useState, useEffect } from "react";
import RequestsCategory from './RequestsCategory';
import CategoryList from "./CategoryList";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    const fetchCategory = async () => {
        try {
            const data = await RequestsCategory();
            setCategories(data);
        } catch (error) {
            console.error('error:', error);
        }
    };

    useEffect(() => {
        fetchCategory();
    }, []);

    return (
        <div>
            {categories.map((category) => (
                <CategoryList key={category.id} category={category} />
            ))}
        </div>
    );
};

export default Categories;
