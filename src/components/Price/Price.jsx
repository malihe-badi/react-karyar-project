import React from "react";
import Input from "../Input/Input";

const Price = ({product}) => {
    return(
        <div className="price">
            <Input 
                type="range"
                value={product.price}
            />

        </div>
    )
}
export default Price ;