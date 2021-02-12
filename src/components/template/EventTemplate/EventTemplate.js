import { Grid } from "@material-ui/core";
import React from "react";
import Header from "../../organisms/Header/Header";

const EventTemplate = (props) => {
    return (
        <Grid container justify={"center"}>
            <Grid item xs={2}>
                <Header activeIndex={props.activeIndex}/>
            </Grid>
            <Grid item xs={10}>
                {props.content}
            </Grid>
        </Grid>
    );
};

export default EventTemplate;