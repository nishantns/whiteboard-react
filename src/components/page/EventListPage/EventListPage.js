import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getEvents, getEventById } from "../../../api/events";
import EventsList from "../../organisms/EventsList/EventsList";
import { rows } from '../../../constants/Constant';

const EventListPage = () => {

  const [events, setEvents] = useState([]);
  const [data, setData] = useState(rows);
  const [searchText, setSearchText] = useState('');
  const [fromDate, setFromDate] = useState(undefined);
  const [toDate, setToDate] = useState(undefined);
  const [checkedItems, setCheckedItems] = useState(new Map());

  useEffect(() => {
    getEvents("")
      .then((response) => {
        setEvents(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onClickSearchById = () => {
    getEventById(searchText)
    .then((response) => {
        console.log(response)
      setEvents(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const onClickFilter = () => {
    let status='';
    let requestParams = '';
    checkedItems.forEach( (value, key) => {value ? status += (status ? "," : "") + "'" + key + "'"  : null});
    requestParams = (status ? "status=" + status : "") + (fromDate ? ("&start_date=" + fromDate) : "") + (toDate ? ("&end_date=" + toDate) : "");
    getEvents(requestParams)
      .then((response) => {
        setEvents(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }

  const onSearchTextChange = (event) => {
    setSearchText(event.target.value);
    console.log(event.target.value);
}

  const onChangeFromDate = (e) => {
    setFromDate(e.target.value);
  }

  const onChangeToDate = (e) => {
    setToDate(e.target.value);
  }

  const handleCheckboxChange = (e) => {
    checkedItems.set(e.target.name, e.target.checked);
    console.log("ASDF", checkedItems);
    setCheckedItems(new Map(checkedItems));
  }

  return (
    <Grid container justify={ "center" } spacing={ 2 }>
      <Grid item xs={ 12 }>

      </Grid>
      <Grid item xs={ 11 }>
        <EventsList onChangeToDate={ onChangeToDate }
                    onChangeFromDate={ onChangeFromDate }
                    onClickFilter={ onClickFilter }
                    onClickSearchById={ onClickSearchById }
                    handleCheckboxChange={handleCheckboxChange}
                    onSearchTextChange={onSearchTextChange}
                    data={events} />
      </Grid>
    </Grid>
    );
};

export default EventListPage;