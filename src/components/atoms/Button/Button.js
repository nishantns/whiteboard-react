import React from 'react';
import { Button as ButtonComp } from '@material-ui/core';

const Button = ({label, onClick, size, variant}) => {
  return (
    <ButtonComp 
        onClick={onClick}
        size={size}
        variant={variant}
    >
      { label }
    </ButtonComp>
    );
}

export default Button;