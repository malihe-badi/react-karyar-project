import React from "react";
import Categories from "../Categories/Categories";
import RangePrice from "./../RangePrice/RangePrice"
import TopSelling from "../TopSelling/TopSelling";
import './Sidebar.css';


 const Sidebar = () => {
    return (
        <div className="sidebar">
                <h2>CATEGORIES</h2>
                 <Categories  />
                 <h2>PRICE</h2>
                 <RangePrice />
                 <h2>TOP SELLING</h2>
                 <TopSelling />

                 
        </div>
    )
 };
 export default Sidebar;