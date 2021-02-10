import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getEvents } from "../../../api/events";
import EventsList from "../../organisms/EventsList/EventsList";

const EventListPage = () => {
    const [events, setEvents] = useState();

    useEffect(() => {
        getEvents()
        .then((response) => {
            setEvents(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <Grid container justify={"center"} spacing={2}>
            <Grid item xs={12}>

            </Grid>
            <Grid item xs={11}>
                <EventsList/>
            </Grid>
        </Grid>
    );
};

export default EventListPage;