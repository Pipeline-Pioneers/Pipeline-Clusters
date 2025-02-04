import React from 'react';
import './input.scss';

const Input = props =>
{
    return (
        // Render an input element with dynamic type, placeholder, value, and onChange handler
        <input 
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange ? (e) => props.onChange(e) : null}
        />
    );
}

export default Input;