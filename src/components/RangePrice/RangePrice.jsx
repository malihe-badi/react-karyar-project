import React, {useState, useEffect} from "react";
import { GrAdd, GrFormSubtract } from "react-icons/gr";
import {api} from '../../utils/api';
import Button from "../Button/Button";
import './RangePrice.css'


const RangePrice =  () => {
   
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000);
  
    const [minValue, setMinValue] = useState(minPrice);
    const [maxValue, setMaxValue] = useState(maxPrice);
    const fetchPrice = async () =>{
    try {
        const data = await api(); 
        const prices = data.products.map((product) => product.price); 
  
        const min = Math.min(...prices); 
        const max = Math.max(...prices); 
  
        
        setMinPrice(min);
        setMaxPrice(max);
        setMinValue(min); 
        setMaxValue(max); 
      } catch (error) {
        console.error("error", error);
      }
    }
    
 

    useEffect(()=> {
        fetchPrice();
    },[]);

    const handleMinChange = (e) => {
        const value = Math.min(Number(e.target.value), maxValue - 1); 
        setMinValue(value);
      };
const handleMaxChange = (e) => {
  const value = Math.max(Number(e.target.value), minValue + 1);
  setMaxValue(value)};

  return(
        <div className="range-price">
        <div className="range-full"></div>
        <div
    className="range-active"
    style={{
      left: `${((minValue - minPrice) / (maxPrice - minPrice)) * 100}%`,
      width: `${((maxValue - minValue) / (maxPrice - minPrice)) * 100}%`,
    }}
    >  
       
  </div>
         <input
    type="range"
    min={minPrice} 
    max={maxPrice} 
    value={minValue} 
    onChange={handleMinChange} 
    className="min-price"
  />
  <input
    type="range"
    min={minPrice}
    max={maxPrice}
    value={maxValue}
    onChange={handleMaxChange}
    className="max-price"
  />
  <div className="btn-range">
  <Button className="btn">
    {minValue.toFixed(0)} 
    <div className="icon-range" >
    <GrAdd />
    <GrFormSubtract />
    </div>
  </Button>
  <span> - </span>
  <Button className="btn">
    {maxValue.toFixed(0)} 
    <div className="icon-range">
    <GrAdd />
    <GrFormSubtract />
    </div>
  </Button>
  </div>



        </div>
    )
};
    
 export default RangePrice;   

