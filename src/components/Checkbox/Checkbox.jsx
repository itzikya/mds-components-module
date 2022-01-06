import './Checkbox.sass';
import '../../styles.sass';

import React, { useState } from 'react';

function Checkbox({ id, isChecked, onClick = () => {}, disabled, style }) {
    const className = `MdsCmp MdsInput MdsCheckbox ${disabled ? 'MdsInput-disabled' : ''}`;

    const [checked, setChecked] = useState(isChecked);

    const handleClick = () => {
        setChecked(!checked);
        onClick();
    }
    return (
        <div className={className} style={style}>
            <input id={id}
                   className='MdsCheckbox-input'
                   type='checkbox'
                   checked={isChecked}
                   onChange={() => {}}
            />
            <label htmlFor={id}
                   className='checker'
                   onClick={handleClick}
            />
        </div>
    );
}

export default Checkbox;