import React,{useState, useEffect} from "react";
import {api} from '../../utils/api';
import TopSellingList from "./TopSellingList";

const TopSelling = () => {
    const [topSelling, setTopSelling] = useState([]);
    
   useEffect(() => {
           api('products/top-rated')
             .then(data => setTopSelling(data.slice(0, 3)))
             .catch(error => console.error('error:', error))
         }, []);
    return(
        <div>
        {topSelling.map((product) => (
            <TopSellingList
            key={product.id}
            product={product}
              />
        ))}
       
    </div>
    )
}

export default TopSelling; 