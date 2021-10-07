import './RemoveButton.sass';
import '../../styles.sass';
import Label from '../Label/Label.jsx';

import React from 'react';


const RemoveButton = ({ text = '', onClick, disabled, icon = 'primary', style }) => {
    const className = `MdsCmp RemoveButton RemoveButton-icon-${icon} ${disabled ? 'MdsInput-disabled' : ""}`;

    return (
        <button className={className}  style={style}>
            <Label color='secondary'>
                x
            </Label>
        </button>
    );
};

export default RemoveButton;
