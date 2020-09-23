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
import AllTickets from "./AllTickets/AllTickets";
import UploadedTickets from "./UploadedTickets/UploadedTickets";
import WishList from "./WishList/WishList";
import CreateDeman from "./CreateDemand/CreateDeman";
import MyDemands from "./MyDemands/MyDemands";
import OtherDemands from "./OtherDemands/OtherDemands";
import UploadName from "./UploadName/UploadName";
import ViewAllNames from "./ViewAllNames/ViewAllNames";
import MyNames from "./MyNames/MyNames";

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
            <Route path="/agentdash/allTickets" component={AllTickets} />
            <Route path="/agentdash/uploaded" component={UploadedTickets} />
            <Route path="/agentdash/whishlist" component={WishList} />
            <Route path="/agentdash/createdemand" component={CreateDeman} />
            <Route path="/agentdash/mydemands" component={MyDemands} />
            <Route path="/agentdash/otherdemands" component={OtherDemands} />

            <Route
              path="/agentdash/changepassword"
              component={ChangePassword}
            />
            <Route path="/agentdash/uplaodnames" component={UploadName} />
            <Route path="/agentdash/allnames" component={ViewAllNames} />
            <Route path="/agentdash/mynames" component={MyNames} />
          </Switch>
        </div>
      </div>
    );
  }
}
