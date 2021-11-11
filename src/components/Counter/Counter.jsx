import './Counter.sass';
import '../../styles.sass';
import Label from '../Label/Label.jsx';
import Button from '../Button/Button.jsx';

import React, { useEffect, useState } from 'react';

const Counter = ({ onChange = () => {}, id, addition = 1, value = 0, error, helperText, disabled, color = 'primary', style }) => {
    const [newValue, setNewValue] = useState(value);
    const className = `MdsCmp MdsCounter MdsCounter-color-${color} ${error ? 'MdsCounter-error' : ''} ${disabled ? 'MdsInput-disabled' : ''}`;

    useEffect(() => { 
        setNewValue(value);
    }, [value])

    const handleClick = (operator) => {
        const operation = {
            '+': newValue + addition,
            '-': newValue - addition,
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
        setNewValue(Number(e.target.value));
        onChange(e);
    }

    const buttonStyle = {
        color: 'var(--color-black)',
        borderRadius: '50px',
        margin: '10px',
        width: '20px',
        backgroundColor: 'white'
    }

    return (
        <div className='MdsCounter-container'>
            <div className={className} style={style}>
                <Button text='-' onClick={() => handleClick('-')} type='text' style={buttonStyle}/>
                <input id={id} value={newValue} onChange={onCounterChange}/>
                <Button text='+' onClick={() => handleClick('+')} type='text' style={buttonStyle}/>
            </div>
            <Label color='invalid' size='small'>
                {error && helperText}
            </Label>
        </div>
    );
};

export default Counter;
