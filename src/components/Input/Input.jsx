import React from "react";

const Input = ({type, name, placeholder, ...rest}) => {
    return(
        <input 
        type={type}
        name={name}
        placeholder={placeholder}
        {...rest} />
    )
}
export default Input;