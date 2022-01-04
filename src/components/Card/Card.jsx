import './Card.sass';

import React from 'react';
import Button from '../Button/Button.jsx';

function Card({ children, id, closeable, color = 'primary', type = 'round', size = 'medium', orientation = 'horizontal', disabled, style }) {
    const className = `MdsCmp MdsCard MdsCard-color-${color} MdsCard-type-${type} MdsCard-orientation-${orientation} MdsCard-size-${size} ${disabled ? 'MdsInput-disabled' : ''}`;
    const hideClassName = 'MdsCard-hide';

    return (
        <div id={id} className={className} style={style}>
            {closeable && <Button type="exit"
                                  onClick={() => {document.getElementById(id).classList.add(hideClassName)}}
                                  style={{justifyContent: 'end', padding: '10px'}}
            />}

            {children}
        </div>
    );
}

export default Card;