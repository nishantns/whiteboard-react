import React from 'react';
import { Button as ButtonComp, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
      // backgroundColor: "#32CD32"
  },

}));

const Button = ({label, onClick, size, variant}) => {
  const classes = useStyles();
  return (
    <ButtonComp 
        onClick={onClick}
        size={size}
        variant={variant}
        // color="primary"
        className={classes.root}
    >
      { label }
    </ButtonComp>
    );
}

export default Button;