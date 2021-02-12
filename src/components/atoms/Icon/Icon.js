import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    icon: {
        width: '20px',
        height: '20px',
    },
    iconFocused: {
        width: '21px',
        height: '21px',
    },
}));

function Icon(props){

    const {Component, ...rest} = props;
    const classes = useStyles();

    let className = rest.color == 'primary' ? classes.iconFocused : classes.icon;
    return <Component classes={{root: className}} {...rest} />;
}

export default Icon;
