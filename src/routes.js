import React from 'react';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import history from "./history";
import NavContainer from "./containers/NavContainer";
import SideNavContainer from "./containers/SideNavContainer";
import HomeContainer from "./containers/HomeContainer";
import SyllabusContainer from "./containers/SyllabusContainer";
import CalendarContainer from "./containers/CalendarContainer";
import RemindersContainer from "./containers/RemindersContainer";
import NotepadContainer from "./containers/NotepadContainer";
import ContactContainer from "./containers/ContactContainer";
import ResourcesContainer from "./containers/ResourcesContainer";
import JournalContainer from "./containers/JournalContainer";

export default (props) => {

    return (
        <Router history={history}>
            <NavContainer />
            <div className="bodyContainer">
                <SideNavContainer />
                <div className="outerComponentContainer">
                    <Switch>
                        <Route path="/" component={HomeContainer} exact />
                        <Route path="/syllabus" component={SyllabusContainer} exact />
                        <Route path="/calendar" component={CalendarContainer} exact />
                        <Route path="/reminders" component={RemindersContainer} exact />
                        <Route path="/notepad" component={NotepadContainer} exact />
                        <Route path="/contact" component={ContactContainer} exact />
                        <Route path="/resources" component={ResourcesContainer} exact />
                        <Route path="/journal" component={JournalContainer} exact />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};