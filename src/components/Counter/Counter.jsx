import './Counter.sass';
import '../../styles.sass';
import Label from '../Label/Label.jsx';

import React, { useEffect, useState } from 'react';

const Counter = ({ onClick, type = 'numeric', placeholder, error, helperText, disabled, color = 'primary', style }) => {
    const [value, setValue] = useState(2);
    const className = `MdsCmp MdsCounter MdsCounter-color-${color} ${error ? 'MdsCounter-error' : ''} ${disabled ? 'MdsInput-disabled' : ''}`;


    let onIncrement;
    let onDecrement;
    if(type === 'numeric') {

    }
    return (
        <div className='MdsCounter-container'>
            <div className={className} style={style}>
                <button className='MdsCounter-button' onClick={(value) => setValue(value--)}>
                    -
                </button>
                <Label color='secondary'>
                    {value}
                </Label>
                <button className='MdsCounter-button' onClick={(value) => setValue(value++)}>
                    +
                </button>
            </div>
            <Label color='invalid' size='small'>
                {error && helperText}
            </Label>
        </div>
    );
};

export default Counter;
