import './Label.sass';
import '../../styles.sass';

import React from 'react';

function Label({ children, color = 'primary', id, size = 'large', position = 'start', style, onClick }) {
    const className = `MdsCmp MdsLabel MdsLabel-color-${color} MdsLabel-size-${size} MdsLabel-position-${position}` ;

    return (
        <div id={id} className={className} onClick={onClick} style={style}>
            {children}
        </div>
    );
}

export default Label;