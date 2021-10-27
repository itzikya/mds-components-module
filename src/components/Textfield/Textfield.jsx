import './Textfield.sass';
import '../../styles.sass';

import React from 'react';

function Textfield({ disabled, onChange = () => {}, placeholder, style }) {
    const className = `MdsCmp MdsTextfield ${disabled ? 'MdsInput-disabled' : ""}`

    return (
        <input className={className} onChange={onChange} style={style}>
         
        </input>
    );
}

export default Textfield;