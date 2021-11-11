import './Button.sass';
import '../../styles.sass';
import Label from '../Label/Label.jsx';
import AddIcon from '../../assets/add-icon.svg';
import ExitIcon from '../../assets/exit-icon.svg';
import VolumeIcon from '../../assets/volume-icon.svg';

import React from 'react';

const Button = ({ text, icon, onClick = () => {}, params = [], disabled, color = 'primary', label, type = 'mds', style }) => {
    const className = `MdsCmp MdsInput MdsButton MdsButton-type-${type} MdsButton-color-${ type === 'mds' ? color : "" } ${disabled ? 'MdsInput-disabled' : ""}`;

    const renderButtonType = () => {
        switch(type) {
            case 'text':
            case 'mds':
                return text
            
            case 'add':
                return <img src={AddIcon} style={{marginTop: '5px'}}/>
                 
            case 'remove':
                return text
            
            case 'exit':
                return <img src={ExitIcon} style={{marginTop: '6px'}}/>
            
            case 'volume':
                return (
                    <div className={'MdsButton-volume'}>
                        <img src={VolumeIcon} style={{height: '70%'}}/>
                    </div>
                )
                
            case 'icon':
                return <img src={icon}/>
            
        }
    }

    return (
        <div className='MdsButton-Container'>
            <button className={className} onClick={() => onClick(...params)} style={style}>
                    {renderButtonType()}
            </button>
            <Label color="secondary" style={{alignItems: "center"}}>
                {label}
            </Label>
        </div>
    );
};

export default Button;
