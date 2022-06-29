import React from 'react'
import '../style/App.css'

const Button = ({ children, color, ...props}) => {
    console.log(props);

    const buttonColor = {
        primary: 'btn-primary',
        transparent: 'btn-tranparent',
        green: 'btn-green'
    };

    const colorClassName = buttonColor[color || 'primary'];

    return (
        <button className={`btn ${colorClassName}`} {...props}> 
        {children}
        </button>
    )  
}

export default Button;
