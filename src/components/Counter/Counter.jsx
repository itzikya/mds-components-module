import './Counter.sass';
import '../../styles.sass';
import MinusIcon from '../../assets/minus.svg';
import PlusIcon from '../../assets/plus.svg';
import Label from '../Label/Label.jsx';
import Button from '../Button/Button.jsx';

import React, { useEffect, useState } from 'react';

const Counter = ({ onChange = () => {}, id, addition = 1, value = 0, error, min, max, decimalPrecision, helperText, disabled, color = 'primary', style }) => {
    const [newValue, setNewValue] = useState(value);
    const [tid, settid] = useState(null);
    const className = `MdsCmp MdsCounter MdsCounter-color-${color} ${error ? 'MdsCounter-error' : ''} ${disabled ? 'MdsInput-disabled' : ''}`;

    const dp=parseInt(decimalPrecision)
    useEffect(() => {
        setNewValue(value);
    }, [value])

    const handleMouseDown = function handleMouseDown(op){
        if(tid!==null){
            clearInterval(tid)
            settid(null)
        }
        settid(setInterval(()=>handleClick(op,false),200))
    }

    const handleMouseUp = function handleMouseUp(){
        if(tid!==null){
            clearInterval(tid)
            settid(null)
        }
        var input = document.querySelector(`#${id}`)
        setNativeInput(input.value)
    }

    const handleMouseOut = function handleMouseOut(){
        if(tid!==null){
            clearInterval(tid)
            settid(null)
        }
        var input = document.querySelector(`#${id}`)
        setNativeInput(input.value)
    }

    const handleClick = function handleClick(operator,dispatch=true) {
        let val=Number(newValue)
        if(!dispatch){
            var input = document.querySelector(`#${id}`);
            val=Number(input.value)
        }

        const operation = {
            '+': ()=>{
                if(min!==undefined){
                    if(val<min)
                        return min
                    else if(max!==undefined){
                        if(val>=max)
                            return min
                        else
                            return val+addition
                    }
                    else
                        return val+addition
                }
                else if(max!==undefined){
                    if(val>=max)
                        return max
                    else
                        return val+addition
                }
                else
                    return val+addition
            },
            '-': ()=>{
                if(max!==undefined){
                    if(val>max)
                        return max
                    else if(min!==undefined){
                        if(val<=min)
                            return max
                        else
                            return val-addition
                    }
                    else
                        return val-addition
                }
                else if(min!==undefined){
                    if(val<=min)
                        return min
                    else
                        return val-addition
                }
                else
                    return val-addition
            }
        };

        const newVal = Math.round((operation[operator])() * 1e12) / 1e12;
        setNativeInput(newVal.toFixed(dp),dispatch);

    }

    const setNativeInput = function setNativeInput(newVal,dispatch=true) {
        var input = document.querySelector(`#${id}`);
        Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set.call(input, newVal);
        if(dispatch)
            input.dispatchEvent(new Event('change', {
                bubbles: true
            }));
    }

    const onCounterChange = function onCounterChange(e) {
        var val=null
        if(dp>0)
            val=e.target.value.replace(/[^0-9-.]/gi,'')
        else
            val=e.target.value.replace(/[^0-9-]/gi,'')
        val=val.replace('..','.')
        if(val.split('').filter(el=>el==='.').length>1){
            setNewValue(value)
            return
        }
        val=val.replace('--','-')
        if(val.split('').filter(el=>el==='-').length>1){
            setNewValue(value)
            return
        }
        if(val.indexOf('-',1)>0){
            setNewValue(value)
            return
        }
        let df=val.split('.')
        if(df.length===2 && df[1].length>dp)
            val=df[0]+'.'+df[1].substring(0, dp)
        let zArr=val.split('')
        if(zArr.filter(el=>{return el==='0'}).length>1 && Number(val)===0)
            if(zArr.indexOf('-')>=0)
                val='-0'
            else
                val='0'
        setNewValue(val)
        if(Number(val)!==Number(value) || Number(val)===0)
            onChange(e.target.id,val);
    };


    const buttonStyle = {
        marginTop: '3px'
    }
    const dispValue=()=>{
        let val=newValue.toString()
        var input = document.querySelector(`#${id}`);
        if(input!==null && dp>0 && val.length>0 && val+'.'===input.value && val!=='.')
            return input.value
        if(input!==null && val.length>0 && val+'-'===input.value && val!=='-')
            return input.value
        return val
    }

    const handleLostFocus= function (){
        if(dp>0){
            if(newValue==='-.'){
                setNewValue('')
                return
            }
            if(newValue.toString().length>0){
                if(newValue=='.' || newValue=='-')
                    setNewValue('')
                else
                    setNewValue(Number(value).toFixed(dp))
            }
        }
        else{
            if(newValue.toString().length>0){
                if(newValue=='-')
                    setNewValue('')
                else
                    setNewValue(Number(value).toFixed(dp))
            }
        }
    }

    return (
        <div className='MdsCounter-container'>
            <div className={className} style={style}>
                <Button onMouseDown={()=>handleMouseDown('-')} onMouseUp={()=>handleMouseUp()} onMouseOut={()=>handleMouseOut()}
                        onClick={() => handleClick('-')} type='icon' icon={MinusIcon} buttonStyle={buttonStyle}/>
                <input id={id} value={dispValue()} onBlur={handleLostFocus} onChange={onCounterChange} onKeyDown={(e)=>{
                    if(e.code==='Enter'){
                        var input = document.querySelector(`#${id}`);
                        if(input!==null)
                            input.blur()
                    }}}/>
                <Button onMouseDown={()=>handleMouseDown('+')} onMouseUp={()=>handleMouseUp()} onMouseOut={()=>handleMouseOut()}
                        onClick={() => handleClick('+')} type='icon' icon={PlusIcon}  buttonStyle={buttonStyle}/>
            </div>
            <Label color='invalid' size='small'>
                {error && helperText}
            </Label>
        </div>
    );
};

export default Counter;
