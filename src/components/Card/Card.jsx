import './Card.sass';
import '../../styles.sass';

import React from 'react';
import Button from '../Button/Button';

function Card({ children, id, closeable, color = 'primary', type = 'round', size = 'medium', orientation = 'horizontal', disabled, onExitClick = () => {}, style }) {
    const className = `MdsCmp MdsCard MdsCard-color-${color} MdsCard-type-${type} MdsCard-orientation-${orientation} MdsCard-size-${size} ${disabled ? 'MdsInput-disabled' : ''}`;

    return (
        <div id={id} className={className} style={style}>
            { closeable &&
                <Button
                    type='exit'
                    onClick={ () => { onExitClick() } }
                    style={{justifyContent: 'end', padding: '10px'}}
                />
            }

            {children}
        </div>
    );
}

export default Card;