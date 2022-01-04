import './Divider.sass';

import React from 'react';

function Divider({ orientation = 'horizontal', color, opacity, style }) {
    const className = `MdsCmp MdsDivider MdsDivider-orientation-${orientation}`;
    if(color) {
        style = {
            ...style,
            backgroundColor: color,
        };
    }

    if(opacity) {
        style = {
            ...style,
            opacity,
        };
    }

    return (
        <div className={className} style={style}/>
    );
}

export default Divider;