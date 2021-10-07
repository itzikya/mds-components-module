import './Label.sass';
import '../../styles.sass';

import React from 'react';

function Label({ children, color = 'primary', size = 'large', position = 'start', style }) {
    const className = `MdsCmp MdsLabel MdsLabel-color-${color} MdsLabel-size-${size} MdsLabel-position-${position}`;

    return (
        <div className={className} style={style}>
            {children}
        </div>
    );
}

export default Label;