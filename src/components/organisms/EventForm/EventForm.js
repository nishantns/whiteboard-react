import { Button, FormControl, FormHelperText, Grid, makeStyles, MenuItem, Select, TextareaAutosize, TextField, Typography } from "@material-ui/core";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Status } from "../../../constants/Status";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#fafafa",
        paddingLeft: "20px",
        paddingTop: "50px",
        paddingRight: "20px"
    },
    fieldPadding: {
        padding: theme.spacing(1, 0, 1, 1)
    },
    locationField: {
        position: "relative",
        top: "45%"
    }
}));

const EventForm = (props) => {
    const classes = useStyles();

    const [selectedTask, setSelectedTask] = useState(0);
    const [taskError, setTaskError] = useState("");

    const [status, setStatus] = useState("");
    const [statusError, setStatusError] = useState("");

    const [description, setDescription] = useState("");
    const [descriptionError, setDescriptionError] = useState("");

    const [selectedTime, setSelectedTime] = useState(null);
    const [timeError, setTimeError] = useState("");

    const [duration, setDuration] = useState("");
    const [durationError, setDurationError] = useState("");

    const [clli, setCLLI] = useState("");
    const [clliError, setCLLIError] = useState("");

    const [address, setAddress] = useState("");
    const [addressError, setAddressError] = useState("");
    
    const [city, setCity] = useState("");
    const [cityError, setCityError] = useState("");

    const [state, setState] = useState("");
    const [stateError, setStateError] = useState("");

    const [siteType, setSiteType] = useState("");
    const [siteTypeError, setSiteTypeError] = useState("");

    const [contactName, setContactName] = useState("");
    const [nameError, setNameError] = useState("");

    const [contactNumber, setContactNumber] = useState("");
    const [numberError, setNumberError] = useState("");

    const [notes, setNotes] = useState("");
    const [notesError, setNotesError] = useState("");
    
    const REQUIRED_FIELD_ERROR = "This field is required.";

    const onSubmit = () => {
        let isSubmissionValid = true;

        if (selectedTask === 0 || selectedTask === null) {
            isSubmissionValid = false;
            setTaskError(REQUIRED_FIELD_ERROR);
        }

        if (props.mode !== "new" && (status === "" || status === null)) {
            isSubmissionValid = false;
            setStatusError(REQUIRED_FIELD_ERROR);
        }

        if (description === "" || description === null) {
            isSubmissionValid = false;
            setDescriptionError(REQUIRED_FIELD_ERROR);
        }

        if (description && description.length > 100) {
            isSubmissionValid = false;
            setDescriptionError("Limit of 100 characters.");
        }

        if (props.mode === "new" && selectedTime && selectedTime < getMinDate()) {
            isSubmissionValid = false;
            setTimeError("Time gap of at least 3 hours required.");
        }

        if (duration === "" || duration === null) {
            isSubmissionValid = false;
            setDurationError(REQUIRED_FIELD_ERROR);
        }

        if (duration % 1 !== 0) {
            isSubmissionValid = false;
            setDurationError("Duration must be a number.");
        }

        if (clli === "" || clli === null) {
            isSubmissionValid = false;
            setCLLIError(REQUIRED_FIELD_ERROR);
        }

        if (clli && clli.length > 20) {
            isSubmissionValid = false;
            setCLLIError("Limit of 20 characters.");
        }

        if (address === "" || address === null) {
            isSubmissionValid = false;
            setAddressError(REQUIRED_FIELD_ERROR);
        }

        if (city === "" || city === null) {
            isSubmissionValid = false;
            setCityError(REQUIRED_FIELD_ERROR);
        }

        if (state === "" || state === null) {
            isSubmissionValid = false;
            setStateError("Required.");
        }

        if (siteType === "" || siteType === null) {
            isSubmissionValid = false;
            setSiteTypeError("Required.");
        }

        if (siteType && siteType.length > 20) {
            isSubmissionValid = false;
            setSiteTypeError("Limit of 20 characters.");
        }

        if (contactName === "" || contactName === null) {
            isSubmissionValid = false;
            setNameError(REQUIRED_FIELD_ERROR);
        }

        if (contactNumber === "" || contactNumber === null) {
            isSubmissionValid = false;
            setNumberError(REQUIRED_FIELD_ERROR);
        }

        if (contactNumber && (contactNumber.length < 10 || contactNumber.length >10 || contactNumber % 1 !== 0)) {
            isSubmissionValid = false;
            setNumberError("Enter a 10 digit phone number");
        }

        if (notes === ""|| notes === null) {
            isSubmissionValid = false;
            setNotesError(REQUIRED_FIELD_ERROR);
        }

        if (notes && notes.length > 300) {
            isSubmissionValid = false;
            setNotesError("Limit of 300 characters.");
        }
        console.log("AAA", selectedTime.format("YYYY-MM-DD HH:mm:ss"))
        if (isSubmissionValid) {
            let event = {
                "status": status,
                "whiteboard_task_id": selectedTask,
                "description": description,
                "scheduled": selectedTime.format("YYYY-MM-DD HH:mm:ss"),
                "duration_minutes": duration,
                "location_clli": clli,
                "location_latitude": 120,
                "location_longitude": 140,
                "location_address": address,
                "city": city,
                "state": state,
                "site_type": siteType,
                "contact_name": contactName,
                "contact_phone_number": contactNumber,
                "notes": notes
            }

            if (props.mode === "new") {
                event.status = "Staged"
            }
            else {
                event.id = props.event.id
            }

            props.onSubmit(event);
        }
    };

    useEffect(() => {
        if (props.event && Object.keys(props.event).length > 0 && props.event.constructor === Object) {
            let event = props.event;
            setSelectedTask(event.whiteboard_task_id);
            setStatus(event.status);
            setDescription(event.description);
            setSelectedTime(moment(event.scheduled));
            setDuration(event.duration_minutes);
            setCLLI(event.location_clli);
            setAddress(event.location_address);
            setCity(event.city);
            setState(event.state);
            setSiteType(event.site_type);
            setContactName(event.contact_name);
            setContactNumber(event.contact_phone_number);
            setNotes(event.notes);
        }
    }, [props.event]);

    const getMinDate = () => {
        let minDate = new Date();
        minDate.setHours(minDate.getHours() + 4);
        minDate.setMinutes(0);
        minDate.setSeconds(0);

        return minDate;
    };

    return (
        <Grid item container xs={10} spacing={2} className={classes.root} alignItems={"center"}>
            <Grid item xs={3}>
                <Typography variant={"subtitle1"} color={"textPrimary"}>Task:</Typography>
            </Grid>
            <Grid item xs={9}>
                <FormControl error={taskError !== ""} fullWidth>
                    <Select
                        variant={"outlined"}
                        fullWidth
                        value={selectedTask}
                        required
                        onChange={(event) => {
                            setTaskError("");
                            setSelectedTask(event.target.value);
                        }}
                    >
                        {props.tasks.map((task) => {
                            return (
                                <MenuItem value={task.id}>{task.name}</MenuItem>
                            );
                        })}
                    </Select>
                    {taskError && <FormHelperText>{taskError}</FormHelperText>}
                </FormControl>
            </Grid>
            {props.mode !== "new" && <Grid item xs={3}>
                <Typography variant={"subtitle1"} color={"textPrimary"}>Status:</Typography>
            </Grid>}
            {props.mode !== "new" && <Grid item xs={9}>
                <FormControl error={statusError !== ""} fullWidth>
                    <Select
                        variant={"outlined"}
                        fullWidth
                        value={status}
                        required
                        onChange={(event) => {
                            setStatusError("");
                            setStatus(event.target.value);
                        }}
                    >
                        {Status.map((status) => {
                            return (
                                <MenuItem value={status}>{status}</MenuItem>
                            );
                        })}
                    </Select>
                    {statusError && <FormHelperText>{statusError}</FormHelperText>}
                </FormControl>
            </Grid>}
            <Grid item xs={3}>
                <Typography variant={"subtitle1"} color={"textPrimary"}>Description:</Typography>
            </Grid>
            <Grid item xs={9}>
                <TextField
                    multiline
                    variant={"outlined"}
                    rows={7}
                    fullWidth
                    helperText={descriptionError}
                    value={description}
                    required
                    error={descriptionError !== ""}
                    onChange={(event) => {
                        setDescriptionError("");
                        setDescription(event.target.value);
                    }}
                />
            </Grid>
            <Grid item xs={3}>
                <Typography variant={"subtitle1"} color={"textPrimary"}>Date/Time:</Typography>
            </Grid>
            <Grid item xs={4}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <DateTimePicker
                        inputVariant={"outlined"}
                        variant={"inline"}
                        format={"MM/DD/YYYY HH:mm:ss A"}
                        value={selectedTime}
                        onChange={(value) => {
                            setTimeError("");
                            setSelectedTime(value);
                        }}
                        minDate={getMinDate()}
                        initialFocusedDate={getMinDate()}
                        minDateMessage={"Time gap of at least 3 hours required."}
                        size={"small"}
                        required
                        minutesStep={15}
                        error={timeError !== ""}
                        helperText={timeError}
                    />
                </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={2}>
                <Typography variant={"subtitle1"} color={"textPrimary"}>Duration (mins):</Typography>
            </Grid>
            <Grid item xs={3}>
                <TextField
                    variant={"outlined"}
                    fullWidth
                    size={"small"}
                    value={duration}
                    required
                    error={durationError !== ""}
                    helperText={durationError}
                    onChange={(event) => {
                        setDurationError("");
                        setDuration(event.target.value);
                    }}
                />
            </Grid>
            <Grid item container>
                <Grid item xs={3}>
                    <Typography variant={"subtitle1"} className={classes.locationField} color={"textPrimary"}>Location:</Typography>
                </Grid>
                <Grid item container xs={9} alignItems={"center"}>
                    <Grid item xs={1} className={classes.fieldPadding}>
                        <Typography variant={"subtitle1"} color={"textPrimary"}>CLLI:</Typography>
                    </Grid>
                    <Grid item xs={11} className={classes.fieldPadding}>
                        <TextField
                            variant={"outlined"}
                            fullWidth
                            size={"small"}
                            value={clli}
                            required
                            error={clliError !== ""}
                            helperText={clliError}
                            onChange={(event) => {
                                setCLLIError("");
                                setCLLI(event.target.value);
                            }}
                        />
                    </Grid>
                    <Grid item xs={4} className={classes.fieldPadding}>
                        <Typography variant={"subtitle1"} color={"textPrimary"}>Address or LAT/LON:</Typography>
                    </Grid>
                    <Grid item xs={8} className={classes.fieldPadding}>
                        <TextField
                            variant={"outlined"}
                            fullWidth
                            size={"small"}
                            value={address}
                            required
                            error={addressError !== ""}
                            helperText={addressError}
                            onChange={(event) => {
                                setAddressError("");
                                setAddress(event.target.value);
                            }}
                        />
                    </Grid>
                    <Grid item xs={1} className={classes.fieldPadding}>
                        <Typography variant={"subtitle1"} color={"textPrimary"}>City:</Typography>
                    </Grid>
                    <Grid item xs={3} className={classes.fieldPadding}>
                        <TextField
                            variant={"outlined"}
                            fullWidth
                            size={"small"}
                            value={city}
                            required
                            error={cityError !== ""}
                            helperText={cityError}
                            onChange={(event) => {
                                setCityError("");
                                setCity(event.target.value);
                            }}
                        />
                    </Grid>
                    <Grid item xs={1} className={classes.fieldPadding}>
                        <Typography variant={"subtitle1"} color={"textPrimary"}>State:</Typography>
                    </Grid>
                    <Grid item xs={2} className={classes.fieldPadding}>
                        <TextField
                            variant={"outlined"}
                            fullWidth
                            size={"small"}
                            value={state}
                            required
                            error={stateError !== ""}
                            helperText={stateError}
                            onChange={(event) => {
                                setStateError("");
                                setState(event.target.value);
                            }}
                        />
                    </Grid>
                    <Grid item xs={2} className={classes.fieldPadding}>
                        <Typography variant={"subtitle1"} color={"textPrimary"}>Site Type:</Typography>
                    </Grid>
                    <Grid item xs={3} className={classes.fieldPadding}>
                        <TextField
                            variant={"outlined"}
                            fullWidth
                            size={"small"}
                            value={siteType}
                            required
                            error={siteTypeError !== ""}
                            helperText={siteTypeError}
                            onChange={(event) => {
                                setSiteTypeError("");
                                setSiteType(event.target.value);
                            }}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Typography variant={"subtitle1"} color={"textPrimary"}>Contact Name:</Typography>
            </Grid>
            <Grid item xs={9}>
                <TextField
                    variant={"outlined"}
                    fullWidth
                    size={"small"}
                    value={contactName}
                    required
                    error={nameError !== ""}
                    helperText={nameError}
                    onChange={(event) => {
                        setNameError("");
                        setContactName(event.target.value);
                    }}
                />
            </Grid>
            <Grid item xs={3}>
                <Typography variant={"subtitle1"} color={"textPrimary"}>Contact Number:</Typography>
            </Grid>
            <Grid item xs={9}>
                <TextField
                    variant={"outlined"}
                    fullWidth
                    size={"small"}
                    value={contactNumber}
                    required
                    error={numberError !== ""}
                    helperText={numberError}
                    onChange={(event) => {
                        setNumberError("");
                        setContactNumber(event.target.value);
                    }}
                />
            </Grid>
            <Grid item xs={3}>
                <Typography variant={"subtitle1"} color={"textPrimary"}>Notes:</Typography>
            </Grid>
            <Grid item xs={9}>
                <TextField
                    multiline
                    variant={"outlined"}
                    rows={7}
                    fullWidth
                    helperText={notesError}
                    value={notes}
                    required
                    error={notesError !== ""}
                    onChange={(event) => {
                        setNotesError("");
                        setNotes(event.target.value);
                    }}
                />
            </Grid>
            <Grid item xs={3}/>
            <Grid item>
                <Button
                    variant={"contained"}
                    color={"primary"}
                    onClick={() => onSubmit()}
                >
                    {props.mode === "new" ? "Create New Event" : "Edit Event"}
                </Button>
            </Grid>
        </Grid>
    );
};

export default EventForm;