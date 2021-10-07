import './Card.sass';
import '../../styles.sass';

import React from 'react';

function Card({ children, color = 'primary', type = 'round', size = 'medium', orientation = 'horizontal', disabled, style }) {
    const className = `MdsCmp MdsCard MdsCard-color-${color} MdsCard-type-${type} MdsCard-orientation-${orientation} MdsCard-size-${size} ${disabled ? 'MdsInput-disabled' : ''}`;

    return (
        <div className={className} style={style}>
            {children}
        </div>
    );
}

export default Card;