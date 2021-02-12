import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const DatePickers = ({ label, onChange, defaultValue}) => {
  const classes = useStyles();

  return (
      <TextField
        id={label}
        type="date"
        defaultValue={defaultValue}
        variant="filled"
        onChange={onChange}
        className={classes.root}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
            style: {
                height: '42px',
                paddingLeft: '15px',
                paddingTop: 0,
                paddingBottom: 0,
                backgroundColor: "#ffffff"
            },
        }}
      />
  );
}

export default DatePickers;