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

    // const onClick = () => {
    //     let x = document.getElementById("myBtn");
    //     if (props.disabled){
    //         x.disabled = true;
    //     }
    // }
    return (
        // <button className={'btn' + loginClassName } type="button" id="myBtn" onclick={onclick}>{children}</button>
        <button className={`btn ${colorClassName}`} {...props}> 
        {children}
        </button>
    )  
}

export default Button;
