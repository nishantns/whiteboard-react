import { AppBar, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import MenuItem from "../../molecules/MenuItem/MenuItem";
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';

const useStyles = makeStyles((theme) => ({
    title: {
        width: 174,
        height: 26,
        margin: theme.spacing(3, 8, 5.75),
        fontWeight: 600,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.3,
        letterSpacing: 0.2,
    }
}));

const Header = (props) => {
    const classes = useStyles();
    const history = useHistory();

    const [index, setIndex] = useState(props.activeIndex);

    const handleClick = (idx) => {
        idx === 1 ? history.push("/") : history.push("/new")
    }

    return (
            <Grid container alignItems={"center"} className={classes.root}>
                <Grid item xs={1}/>
                <Grid item>
                    <Typography color="primary" variant="h2" className={classes.title}>Windstream</Typography>
                </Grid>
                <Grid item>
                    <MenuItem text={"Current Events"}
                        onClick={() => handleClick(1)}
                        selected={index === 1}
                        icon={DateRangeOutlinedIcon} />
                </Grid>
                <Grid item>
                    <MenuItem  text={"Create Event"}
                        onClick={() => handleClick(2)}
                        selected={index === 2}
                        icon={DateRangeOutlinedIcon}  />
                </Grid>
            </Grid>
    );
};

export default Header;