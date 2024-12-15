import React from "react";
import Categories from "../Categories/Categories";
import './Sidebar.css';


 const Sidebar = () => {
    return (
        <div className="sidebar">
                <h2>CATEGORIES</h2>
                 <Categories  />
        </div>
    )
 };
 export default Sidebar;