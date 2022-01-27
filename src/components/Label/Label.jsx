import './Label.sass';
import '../../styles.sass';

import React from 'react';

function Label({ children, color = 'primary', id, size = 'large', position = 'start', disabled, style, onClick }) {
    const className = `MdsCmp MdsLabel MdsLabel-color-${color} MdsLabel-size-${size} MdsLabel-position-${position} ${disabled ? 'MdsLabel-disabled' : ''}` ;

    return (
        <div id={id} className={className} disabled={disabled} onClick={onClick} style={style}>
            {children}
        </div>
    );
}

export default Label;