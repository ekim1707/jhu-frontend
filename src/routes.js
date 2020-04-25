import React from 'react';
import { Switch, Router, Route } from "react-router-dom";
import history from "./history";
import NavContainer from "./containers/NavContainer";
import SideNavContainer from "./containers/SideNavContainer";
import HomeContainer from "./containers/HomeContainer";

export default (props) => {

    return (
        <Router history={history}>
            <NavContainer />
            <div className="bodyContainer">
                <SideNavContainer />
                <Switch>
                    <Route path="/" component={HomeContainer} exact />
                </Switch>
            </div>
        </Router>
    );
};