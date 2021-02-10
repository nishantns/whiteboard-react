import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from "@material-ui/core";
import { theme } from './theme';
import NewEventPage from './components/page/NewEventPage/NewEventPage';
import EventListPage from './components/page/EventListPage/EventListPage';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    {/* <Route exact path={"/new"} component={NewEventPage} /> */}
                    <Route exact path={"/"} component={EventListPage} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
};

export default App;
