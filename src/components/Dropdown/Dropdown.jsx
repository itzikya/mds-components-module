import './Dropdown.sass';
import '../../styles.sass';
import Label from '../Label/Label.jsx';

import React, { useState, useEffect } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const white = 'var(--color-white)';
const black = 'var(--color-black)';

const root = {
    color: white,
    backgroundColor: black,
    height: 40,
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    width: 190,
}

const styles = {
    root: {
        ...root,
    },
    rootDisabled: {
        ...root,
        opacity: '20%',
        pointerEvents: 'none'
    },
    rootError: {
        ...root,
        border: '1px solid var(--color-red)'
    },
    rootDisabledError: {
        ...root,
        opacity: '20%',
        pointerEvents: 'none',
        border: '1px solid var(--color-red)'
    },
    popupIndicator: {
        color: white,
        marginRight: 10
    },
    listbox: {
        '& .MuiListItem-root.Mui-selected': {
            backgroundColor: "#ffff00",
            color: "#ff00",
            fontWeight: 600
        },
        color: '#ffffff',
        backgroundColor: '#000000',
        '& li[data-focus="true"]': {
            backgroundColor: '#8D8E8D',
            cursor: 'pointer',
        },
        '&::-webkit-scrollbar': {
            width: '10px',
            height: '10px'
        },
        '&::-webkit-scrollbar-corner': {
          backgroundColor: '#000000'
        },   
        '&::-webkit-scrollbar-track': {
            backgroundColor: '#000000'
        },          
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#8d8e8d',
            borderRadius: '5px',
            boxShadow: 'inset 2px 2px 3px rgba(0, 0, 0, 0.3)'
        }
    },
    noOptions: {
        color: '#ffffff',
        backgroundColor: '#000000'
    },
    input: {
        color: white,
        marginLeft: 10,
        paddingRight: 0,
        '&:focus': {
            textOverflow: 'ellipsis',
        },
        '& .MuiAutocomplete-inputRoot': {
            width: '100%'
        }
    },
    loading: {
        backgroundColor:black,
        color: white
    },
    svg: {
        color: white
    }
};

function Dropdown({ classes, id, placeholder, loading, value, onChange, disabled, error, helperText, onOpen=()=>{}, onClose=()=>{}, type, ...other }) {
    let rootClass = classes.root;
    if(error && disabled)
        rootClass = classes.rootDisabledError;
    else if(error) {
        rootClass = classes.rootError;
    }
    else if(disabled) {
        rootClass = classes.rootDisabled;
    }

    const [currentPlaceholder, setCurrentPlaceholder] = useState(placeholder);

    useEffect(() => {
        setCurrentPlaceholder(placeholder);
    }, [placeholder])

    return (
        <div className='MdsCmp drop-down-container'>
            <Autocomplete
                id={id}
                disableClearable
                selectOnFocus
                classes={{
                    inputRoot: classes.inputRoot,
                    root: rootClass,
                    popupIndicator: classes.popupIndicator,
                    listbox: classes.listbox,
                    noOptions: classes.noOptions,
                    input: classes.input,
                    loading: classes.loading,
                }}
                disabled={disabled}
                {...other}
                onOpen={(e) => {
                    onOpen(e, id, type)
                }}
                onClose={(e) => {
                    onClose(e, id, type)
                }}
                onKeyDown={(e)=>{
                    if(e.code==='Enter'){
                      var input = document.querySelector(`#${id}`);
                      if(input!==null)
                        input.blur()
                        input.focus()
                    }}}
                loading={loading}
                onInputChange={onChange}
                value={value}
                getOptionSelected={(opt,val) => val===''?false:val===opt}
                renderInput={(params) =>
                    <TextField
                        {...params}
                        disabled={disabled}
                        placeholder={currentPlaceholder}
                        value={value}
                        InputProps={{
                            ...params.InputProps,
                            disableUnderline: true,
                            endAdornment: (
                                <React.Fragment>
                                    {loading ? <CircularProgress classes={{ svg: classes.svg }} size={20} /> : null}
                                    {params.InputProps.endAdornment}
                                </React.Fragment>
                            )
                        }}
                    />}

            />
            <Label color="invalid" size="small" disabled={disabled}>
                {error && helperText}
            </Label>
        </div>
    );
}

export default withStyles(styles)(Dropdown);
