import { Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Checkbox from '../../atoms/checkbox/checkbox';
import DatePicker from '../../atoms/DatePicker/DatePicker';
import Table from '../../molecules/Table/Table';
import TextField from '../../atoms/Input/TextField';
import Button from '../../atoms/Button/Button';
import { CheckboxLabels, rows } from '../../../constants/Constant';

const useStyles = makeStyles((theme) => ({
    checkboxes: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    search: {
        paddingRight: theme.spacing(2)
    },
    table: {
        marginTop: theme.spacing(5),
    }
  }));

const EventsList = (props) => {
    const classes = useStyles();
    
    return(
        <div>
            <Grid container>
                <Grid item className={classes.checkboxes}>
                    {   CheckboxLabels.map(item => {
                            return <Checkbox onChange={props.handleCheckboxChange} label={item}/>
                        })
                    }
                </Grid>
                <Grid item container direction="row">
                    <Grid item container direction="row" xs={8} alignItems="center">
                        <Grid item>
                            <Typography>Date Range:</Typography>
                        </Grid>
                        <Grid item>
                            <DatePicker onChange={(e) => props.onChangeFromDate(e)} />
                        </Grid>
                        <Grid item>
                            <Typography>through</Typography>
                        </Grid>
                        <Grid item>
                            <DatePicker onChange={(e) => props.onChangeToDate(e)}/>
                        </Grid>
                        <Grid item>
                            <Button onClick={props.onClickFilter} size="large" variant="contained" label={"Filter"} />
                        </Grid>
                    </Grid>
                    <Grid item container xs={4}>
                        <Grid item>
                            <TextField onChange={props.onSearchTextChange} variant="filled" placeholder="search" />
                        </Grid>
                        <Grid item>
                            <Button onClick={props.onClickSearchById} size="large" variant="contained" label={"By ID"} />
                        </Grid>
                    </Grid> 
                </Grid>
                <Grid item xs={12} className={classes.table}>
                    <Table rows={props.data}/>
                </Grid>
            </Grid>
        </div>
    );
}

export default EventsList;
