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

const EventsList = () => {
    const classes = useStyles();

    const [data, setData] = useState(rows);
    const [searchText, setSearchText] = useState('');
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const [checkedItems, setCheckedItems] = useState(new Map());

    const onSearchTextChange = (event) => {
        setSearchText(event.target.value);
        console.log(event.target.value);
    }

    const onClickSearchById = () => {
        console.log('search by id')
    }

    const onClickFilter = () => {
        console.log(checkedItems)
        console.log(fromDate);
        console.log('filter')
    }

    const onChangeFromDate = (e) => {
        setFromDate(e.target.value);
    }

    const onChangeToDate = () => {
        setToDate(e.target.value);
    }

    const handleCheckboxChange = (e) => {
        checkedItems.set(e.target.name, e.target.checked);
        setCheckedItems(new Map(checkedItems));
    }
    return(
        <div>
            <Grid container>
                <Grid item className={classes.checkboxes}>
                    {   CheckboxLabels.map(item => {
                            return <Checkbox onChange={handleCheckboxChange} label={item}/>
                        })
                    }
                </Grid>
                <Grid item container direction="row">
                    <Grid item container direction="row" xs={8} alignItems="center">
                        <Grid item>
                            <Typography>Date Range:</Typography>
                        </Grid>
                        <Grid item>
                            <DatePicker onChange={onChangeFromDate} />
                        </Grid>
                        <Grid item>
                            <Typography>through</Typography>
                        </Grid>
                        <Grid item>
                            <DatePicker onChange={onChangeToDate}/>
                        </Grid>
                        <Grid item>
                            <Button onClick={onClickFilter} size="large" variant="contained" label={"Filter"} />
                        </Grid>
                    </Grid>
                    <Grid item container xs={4}>
                        <Grid item>
                            <TextField onChange={onSearchTextChange} variant="filled" placeholder="search" />
                        </Grid>
                        <Grid item>
                            <Button onClick={onClickSearchById} size="large" variant="contained" label={"By ID"} />
                        </Grid>
                    </Grid> 
                </Grid>
                <Grid item xs={12} className={classes.table}>
                    <Table rows={data}/>
                </Grid>
            </Grid>
        </div>
    );
}

export default EventsList;
