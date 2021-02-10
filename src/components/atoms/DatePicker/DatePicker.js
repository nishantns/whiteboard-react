import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const DatePickers = ({ label, onChange}) => {
  const classes = useStyles();

  return (
      <TextField
        id={label}
        // label={label}
        type="date"
        // defaultValue="2017-05-24"
        variant="filled"
        // size="small"
        onChange={onChange}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
            style: {
                height: '42px',
                paddingLeft: '15px',
                paddingTop: 0,
                paddingBottom: 0
            },
        }}
      />
  );
}

export default DatePickers;