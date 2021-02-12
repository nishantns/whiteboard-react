import { Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { saveEvent } from "../../../api/events";
import { getTasks } from "../../../api/tasks";
import EventForm from "../../organisms/EventForm/EventForm";
import Header from "../../organisms/Header/Header";
import EventTemplate from "../../template/EventTemplate/EventTemplate";

const useStyles = makeStyles((theme) => ({
    headerContainer: {
        paddingBottom: theme.spacing(2)
    }
}));

const NewEventPage = () => {
    const [tasks, setTasks] = useState([]);
    const history = useHistory();
    const classes = useStyles();

    useEffect(() => {
        getTasks()
        .then((response) => {
            setTasks(response.data.data)
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    const onSubmit = (newEvent) => {
        saveEvent(newEvent)
        .then((response) => {
            history.push("/");
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <EventTemplate
            activeIndex={2}
            content={
                <EventForm
                    mode={"new"}
                    tasks={tasks}
                    onSubmit={onSubmit}
                />
            }
        />
    );
}

export default NewEventPage;