import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from "@material-ui/core";
import { theme } from './theme';
import NewEventPage from './components/page/NewEventPage/NewEventPage';
import EventListPage from './components/page/EventListPage/EventListPage';
import EventDetailsPage from './components/page/EventDetailsPage/EventDetailsPage';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route exact path={"/events/:eventId"} component={EventDetailsPage} />
                    <Route exact path={"/new"} component={NewEventPage} />
                    <Route exact path={"/"} component={EventListPage} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
};

export default App;
