import { Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { editEvent, getEventById } from "../../../api/events";
import { getTasks } from "../../../api/tasks";
import EventForm from "../../organisms/EventForm/EventForm";
import Header from "../../organisms/Header/Header";
import EventTemplate from "../../template/EventTemplate/EventTemplate";

const useStyles = makeStyles((theme) => ({
    headerContainer: {
        paddingBottom: theme.spacing(2)
    }
}));

const EventDetailsPage = () => {
    const { eventId } = useParams();
    const history = useHistory();
    const [event, setEvent] = useState();
    const [tasks, setTasks] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getEventById(eventId)
        .then((response) => {
            setEvent(response.data.data[0]);
        })
        .catch((error) => {
            console.log(error);
        })

        getTasks()
        .then((response) => {
            setTasks(response.data.data)
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    const onSubmit = (updatedEvent) => {
        editEvent(eventId, updatedEvent)
        .then((response) => {
            history.push("/");
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <EventTemplate
            content={
                <EventForm
                    event={event}
                    tasks={tasks}
                    onSubmit={onSubmit}
                />
            }
        />
    );
};

export default EventDetailsPage;