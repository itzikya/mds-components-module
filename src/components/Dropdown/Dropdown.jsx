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
        ...root
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
    popupIndicator: {
        color: white,
        marginRight: 10,
    },
    listbox: {
        color: white,
        backgroundColor: black,
        '& li[data-focus="true"]': {
            backgroundColor: 'var(--color-nero)',
            cursor: 'pointer',
        }
    },
    noOptions: {
        color: white,
        backgroundColor: black,
    },
    input: {
        color: white,
        marginLeft: 10,
        paddingRight: 0,
        '&:focus': {
            textOverflow: 'ellipsis',
        },
        '& .MuiAutocomplete-inputRoot': {
            width: '100%',
        }
    },
    loading: {
        backgroundColor:black,
        color: white,
    },
    svg: {
        color: white,
    }
};

function Dropdown({ classes, id, placeholder, loading, value, onChange, disabled, error, helperText, onOpen=()=>{}, onClose=()=>{}, type, ...other }) {
    let rootClass = classes.root;
    if(error) {
        rootClass = classes.rootError;
    }
    if(disabled) {
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
                loading={loading}
                onInputChange={onChange}
                value={value}
                getOptionSelected={()=>true}
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
            <Label color="invalid" size="small">
                {error && helperText}
            </Label>
        </div>
    );
}

export default withStyles(styles)(Dropdown);
