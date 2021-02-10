import { makeStyles, TextField } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  }));


const Input = ({onChange, variant, placeholder}) => {
    const classes = useStyles();
    return(
        <TextField 
            onChange={onChange}
            variant={variant}
            placeholder={placeholder}
            inputProps={{
                style:{
                    height: '42px',
                    paddingLeft: '15px',
                    paddingTop: 0,
                    paddingBottom: 0
                }
            }}
        />
    );
}

export default Input;
