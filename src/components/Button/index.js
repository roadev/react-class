import React from 'react';
import styles from './styles';

function Button({ children, onClick, buttonStyle }) {
    return (
        <button
            style={{ ...styles, ...buttonStyle }} 
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;
