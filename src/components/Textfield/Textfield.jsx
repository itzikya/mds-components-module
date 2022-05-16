import './Textfield.sass';
import '../../styles.sass';
import Label from '../Label/Label.jsx';

import React, { useState, useEffect } from 'react';

function Textfield({ disabled, type = '', onChange = () => {}, id, placeholder, helperText, error, value, controlled, ...other }) {
    const className = `MdsCmp MdsTextfield ${type === 'search' ? 'MdsTextfield-search' : ''} ${error ? 'MdsTextfield-error' : ''} ${disabled ? 'MdsInput-disabled' : ''}`

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
        onChange(e, e.target.value);
    }

    return (
        <>
            <input className={className} id={id} value={controlled?value:(val || '')} placeholder={holder} disabled={disabled} onChange={handleChange} {...other}/>
            <Label color='invalid' size='small'>
                {error && helperText}
            </Label>
        </>
    );
}

export default Textfield;