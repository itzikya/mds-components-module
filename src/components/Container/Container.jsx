import './Container.sass';
import '../../styles.sass';
import Label from '../Label/Label.jsx';

import React from 'react';

function Container({ children, header, position, color, size, orientation="horizontal", style }) {
    const className = `MdsCmp MdsContainer-content MdsContainer-content-orientation-${orientation}`

    return (
        <div className='MdsContainer' style={style}>
            <Label color={color} size={size} position={position} style={{margin: '5px'}}>
                {header}
            </Label>
            <div className={className}>
                {children}
            </div>
        </div>
    );
}

export default Container;