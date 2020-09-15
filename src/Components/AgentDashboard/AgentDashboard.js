import React, { Component } from "react";
import AgentNavbar from "./AgentNavbar";
import { Switch, Route } from "react-router-dom";
import Welcome from "../Welcome/Welcome";
// import CreateGroup from './CreateGroup';
import Groups from "./Groups";
import ChangePassword from "./ChangePassword/ChangePassword";
import DoneDeals from "./DoneDeals/DoneDeals";
import Subscriptions from "./Subscriptions/Subscriptions";
import MyProfile from "./MyProfile/MyProfile";
import FindGroup from "./FindGroup/FindGroup";

export default class AgentDashboard extends Component {
  render() {
    return (
      <div>
        <div>
          <AgentNavbar />
        </div>

        <div>
          <Switch>
            <Route path="/agentdash/" exact component={Welcome} />
            <Route path="/agentdash/creategroup" component={Groups} />
            <Route path="/agentdash/donedeals" component={DoneDeals} />
            <Route path="/agentdash/subscriptions" component={Subscriptions} />
            <Route path="/agentdash/myprofile" component={MyProfile} />
            <Route path="/agentdash/find" component={FindGroup} />

            <Route
              path="/agentdash/changepassword"
              component={ChangePassword}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
