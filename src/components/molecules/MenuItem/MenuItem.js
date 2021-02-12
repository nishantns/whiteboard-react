import React from 'react';
import { Grid,makeStyles,Typography } from '@material-ui/core';
import Icon from '../../atoms/Icon/Icon';

const useStyles = makeStyles( (theme) => (
        {
            itemStyle:{
                width: '240px',
                height: '50px',
                margin: theme.spacing(0, 'auto', 5),
                paddingTop: theme.spacing(1),
                paddingLeft: theme.spacing(5),
                borderRadius: 10,
                backgroundColor: props => props.selected ? 'rgba(90, 197, 104, 0.15)' : 'rgb(255,255,255)',
                cursor: 'pointer', 
            },
            itemText: {
                color: props => props.selected ? theme.palette.text.green : theme.palette.text.secondary,
            },
        })
)

function MenuItem(props){

    const classes = useStyles(props);   

    return (<div onClick={props.onClick}>
             <Grid container spacing={2} justify="flex-start" className={classes.itemStyle}>
                <Grid item xs={2} >
                    <Icon data-testid="iconComponent" Component={props.icon} fontSize="small" color={props.selected ? "primary" : "secondary"} />
                </Grid>
                <Grid item xs={10} >
                    <Typography variant="h4" color="primary" className={classes.itemText}>{props.text}</Typography>
                </Grid>    
            </Grid>
            </div>);
}

export default MenuItem;
