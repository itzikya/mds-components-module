import './Dropdown.sass';
import '../../styles.sass';
import Label from '../Label/Label.jsx';

import React, { useState, useEffect } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';


const root = {
    color: 'white',
    backgroundColor: 'black',
    height: 40,
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    width: 190
}

const styles = {
    root: {
        ...root
    },
    rootDisabled: {
        ...root,
        opacity: '20%',
        pointerEvents: 'none'
    },
    rootError: {
        ...root,
        border: '1px solid #F34747'
    },
    popupIndicator: {
        color: 'white',
        marginRight: 10,
    },
    listbox: {
        color: 'white',
        backgroundColor: 'black',
        '& li[data-focus="true"]': {
            backgroundColor: "#292B27",
            cursor: 'pointer',
        }
    },
    noOptions: {
        color: 'white',
        backgroundColor: 'black',
    },
    input: {
        color: 'white',
        marginLeft: 10,
        paddingRight: 0,
        '&:focus': {
            textOverflow: 'ellipsis',
        },
        '& .MuiAutocomplete-inputRoot': {
            width: '100%',
        }
    }
};

function Dropdown({ classes, options = [], placeholder, value = '', onChange, disabled, error, helperText, style }) {
    let rootClass = classes.root;
    if(error) {
        rootClass = classes.rootError;
    }
    if(disabled) {
        rootClass = classes.rootDisabled;
    }

    const [currentPlaceholder, setCurrentPlaceholder] = useState(placeholder);
    const [currentValue, setCurrentValue] = useState(value);

    useEffect(() => {
        setCurrentPlaceholder(placeholder);
    }, [placeholder])

    useEffect(() => {
        setCurrentValue(value);
    }, [value])

    return (
        <div className='MdsCmp drop-down-container'>
            <Autocomplete
                classes={{
                    inputRoot: classes.inputRoot,
                    root: rootClass,
                    popupIndicator: classes.popupIndicator,
                    listbox: classes.listbox,
                    noOptions: classes.noOptions,
                    input: classes.input,
                }}
                options={options}
                onInputChange={onChange}
                style={style}
                value={currentValue}
                renderInput={(params) =>
                    <TextField
                        {...params}
                        placeholder={currentPlaceholder}
                        InputProps={{
                            ...params.InputProps,
                            disableUnderline: true,
                        }}
                    />}

            />
            <Label color="invalid" size="small">
                {error && helperText}
            </Label>
        </div>
    );
}

export default withStyles(styles)(Dropdown);
