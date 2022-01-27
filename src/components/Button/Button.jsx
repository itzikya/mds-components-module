import './Button.sass';
import '../../styles.sass';
import Label from '../Label/Label.jsx';
import AddIcon from '../../assets/add-icon.svg';
import ExitIcon from '../../assets/exit-icon.svg';
import RemoveIcon from '../../assets/remove-icon.svg';
import VolumeIcon from '../../assets/volume-icon.svg';

import React from 'react';

const Button = ({ text, icon, orientation = 'horizontal', disabled, color = 'primary', label, type = 'mds', style, buttonStyle, onClick, ...other }) => {
    const className = `MdsCmp MdsInput MdsButton MdsButton-type-${type} ${type === 'mds'?`MdsButton-color-${color}`:''} ${disabled ? 'MdsInput-disabled' : ''}`;

    const renderButtonType = () => {
        switch(type) {
            case 'text':
            case 'mds':
                return text

            case 'add':
                return <img alt='' src={AddIcon} style={{marginTop: '5px'}}/>

            case 'remove':
                return <img alt='' src={RemoveIcon} style={{marginTop: '5px'}}/>

            case 'exit':
                return <img alt='' src={ExitIcon} style={{marginTop: '6px'}}/>

            case 'volume':
                return (
                    <div className={'MdsButton-volume'}>
                        <img alt='' src={VolumeIcon} style={{height: '70%'}}/>
                    </div>
                )

            case 'icon':
                return <img alt='' src={icon}/>

            default:
                return text;
        }
    }

    return (
        <div className={`MdsButton-Container MdsButton-orientation-${orientation}`} style={style}>
            <button className={className} disabled={disabled} onClick={onClick} style={buttonStyle} {...other}>
                {renderButtonType()}
            </button>
            <Label color="secondary" onClick={onClick} style={{alignItems: "center", cursor:disabled?'default':'pointer'}} disabled={disabled} >
                {label}
            </Label>
        </div>
    );
};

export default Button;
