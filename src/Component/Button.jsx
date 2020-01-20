import React from 'react';
import './Button.scss'

/**
 * 
 * 
 */
const Button = ({ name = '', backgroundColor = '#ffffff', color = '#000000', width = '200px', height = '40px' ,fontSize='20px'}) => {
    const style = {
        backgroundColor: backgroundColor,
        color: color,
        width: width,
        height: height,
        fontSize:fontSize
    }
    return (
        <button className="button" style={style}>
            {name}
        </button>
    );
}

export default Button;
