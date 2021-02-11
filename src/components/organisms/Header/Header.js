import { AppBar, Button, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "64px",
        backgroundColor: "white"
    }
}));

const Header = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <AppBar position={"static"} variant={"outlined"} className={classes.root}>
            <Grid container alignItems={"center"} style={{height: "100%"}}>
                <Grid item xs={1}/>
                <Grid item>
                    <Button
                        onClick={() => history.push("/")}
                    >
                        Current Events
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        onClick={() => history.push("/new")}
                    >
                        Create Event
                    </Button>
                </Grid>
            </Grid>
        </AppBar>
    );
};

export default Header;