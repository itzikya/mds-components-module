import './Checkbox.sass';
import '../../styles.sass';

import React from 'react';

function Checkbox({ id, isChecked, onClick, disabled, style }) {
    const className = `MdsCmp MdsInput MdsCheckbox ${disabled ? 'MdsInput-disabled' : ""}`

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
                   onClick={onClick}
            />
            {/*<span className='grid-row-checkmark'/>*/}
        </div>
    );
}

export default Checkbox;