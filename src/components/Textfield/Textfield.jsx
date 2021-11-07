import './Textfield.sass';
import '../../styles.sass';
import Label from '../Label/Label.jsx';

import React, { useState, useEffect } from 'react';

function Textfield({ disabled, onChange = () => {}, id, placeholder, helperText, error, value, style }) {
    const className = `MdsCmp MdsTextfield ${error ? 'MdsTextfield-error' : ''} ${disabled ? 'MdsInput-disabled' : ""}`

    const [val, setVal] = useState(value);
    const [holder, setHolder] = useState(placeholder);

    useEffect(() => {
        setVal(value);
    }, [value])

    useEffect(() => {
        setHolder(placeholder);
    }, [placeholder])

    const handleChange = (e) => {
        setVal(e.target.value);
        onChange(e);
    }

    return (
        <div>
            <input className={className} id={id} value={val} placeholder={holder} onChange={handleChange} style={style}/>
            <Label color='invalid' size='small'>
                {error && helperText}
            </Label>
        </div>
    );
}

export default Textfield;