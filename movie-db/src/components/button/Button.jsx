import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

// Button component
const Button = props => 
{
    return (
        // Render a button element with dynamic class and onClick handler
        <button className={`btn ${props.className}`} onClick={props.onClick ? () => props.onClick() : null}>
            {props.children}
        </button>
    )
}

// OutlineButton component
export const OutlineButton = props =>
{
    return (
        // Render a Button component with an outline style
        <Button className={`btn-outline ${props.className}`} onClick={props.onClick ? () => props.onClick() : null}>
            {props.children}
        </Button>
    );
}

// PropTypes for Button component
Button.propTypes = 
{
    onClick: PropTypes.func // onClick is an optional function prop
}

export default Button;
