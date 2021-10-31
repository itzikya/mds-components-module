import './Textfield.sass';
import '../../styles.sass';

import React, { useState, useEffect } from 'react';

function Textfield({ disabled, onChange = () => {}, id, placeholder, value, style }) {
    const className = `MdsCmp MdsTextfield ${disabled ? 'MdsInput-disabled' : ""}`

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
        <input className={className} id={id} value={val} placeholder={holder} onChange={handleChange} style={style} />
    );
}

export default Textfield;