import './Button.sass';
import '../../styles.sass';

import React from 'react';

const Button = ({ text, onClick = () => {}, params = [], disabled, color = 'primary', style }) => {
    const className = `MdsCmp MdsInput MdsButton MdsButton-color-${color} ${disabled ? 'MdsInput-disabled' : ""}`;

    return (
        <button className={className} onClick={() => onClick(...params)} style={style}>
            {text}
        </button>
    );
};

export default Button;
