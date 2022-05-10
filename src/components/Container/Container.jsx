import './Container.sass';
import '../../styles.sass';
import Label from '../Label/Label.jsx';

import React from 'react';

function Container({ children, header, position, color, size, disabled = false, orientation='horizontal', style, contentStyle }) {
    const className = `MdsCmp MdsContainer-content MdsContainer-content-orientation-${orientation}`

    return (
        <div className='MdsContainer' style={style}>
            {header && <Label color={color} size={size} disabled={disabled} position={position} style={{margin: '5px'}}>
                {header}
            </Label>}
            <div className={className} style={contentStyle}>
                {children}
            </div>
        </div>
    );
}

export default Container;