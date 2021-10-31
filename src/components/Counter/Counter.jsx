import './Counter.sass';
import '../../styles.sass';
import Label from '../Label/Label.jsx';

import React, { useEffect, useState } from 'react';

const Counter = ({ onChange = () => {}, id, addition = 1, placeholder = 0, error, helperText, disabled, color = 'primary', style }) => {
    const [value, setValue] = useState(placeholder);
    const className = `MdsCmp MdsCounter MdsCounter-color-${color} ${error ? 'MdsCounter-error' : ''} ${disabled ? 'MdsInput-disabled' : ''}`;

    useEffect(() => { 
        setValue(placeholder);
    }, [placeholder])

    const handleClick = (operator) => {
        const operation = {
            '+': value + addition,
            '-': value - addition,
        }
        
        const newVal = Math.round((operation[operator]) * 1e12) / 1e12; 
        setNativeInput(newVal);
    }

    const setNativeInput = (newVal) => {
        const input = document.querySelector(`#${id}`);

        Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')
          .set.call(input, newVal);
    
        input.dispatchEvent(new Event('change', { bubbles: true }));
    }

    const onCounterChange = (e) => {
        setValue(Number(e.target.value));
        onChange(e);
    }

    return (
        <div className='MdsCounter-container'>
            <div className={className} style={style}>
                <button className='MdsCounter-button' onClick={() => handleClick('-')}>
                    -
                </button>
                <input id={id} value={value} onChange={onCounterChange}/>
                {/* <Label id={id} onChange={onChange} color='secondary'>
                    {value}
                </Label> */}
                <button className='MdsCounter-button' onClick={() => handleClick('+')}>
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
