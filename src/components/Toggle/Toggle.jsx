import './Toggle.sass';
import '../../styles.sass';

import React, { useEffect, useState } from 'react';

function Toggle({ id, isChecked = false, onChange = () => {}, color = 'primary', size = 'large', disabled, style }) {
    const [isToggled, setIsToggled] = useState(isChecked);
    const onToggle = () => {
        onChange(!isToggled);
        setIsToggled(!isToggled);
    }

    useEffect(() => {
        setIsToggled(isChecked)
    }, [isChecked])

    const className = `MdsCmp MdsInput MdsToggle MdsToggle-color-${color} MdsToggle-size-${size} ${disabled ? 'MdsInput-disabled' : ''}`;
    const labelClassName = `toggle MdsToggle-color-${color}`;

    return (
        <div className={className} style={style}>
            <input id={id}
                   className='MdsToggle-input'
                   type='checkbox'
                   checked={isToggled}
                   onChange={() => {}}
            />
            <label htmlFor={id}
                   className={labelClassName}
                   onClick={onToggle}
            >
            </label>
        </div>
    );
}

export default Toggle;