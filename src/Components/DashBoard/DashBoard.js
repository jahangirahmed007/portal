import React, { Component, Suspense } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logOut } from "../../Actions/index";
import { Route, Switch } from "react-router-dom";
import AdminDashSideBar from "../AdminDashSideBar/AdminDashSideBar";
const RequireNames = React.lazy(() => import("./RequireNames/RequireNames"));
const Demands = React.lazy(() => import("./Demands/Demands"));
const GroupTickets = React.lazy(() => import("./GroupsTickets/GroupTickets"));

const AllDeals = React.lazy(() => import("./AllDeals/AllDeals"));
const ViewUsers = React.lazy(() => import("./ViewUsers/ViewUsers"));
const ActionsOfUser = React.lazy(() =>
  import("./ActionsOfUsers/ActionsOfUser")
);
const AllAgents = React.lazy(() => import("./AllAgents/AllAgents"));
const AgentSubs = React.lazy(() => import("./AgentSubs/AgentSubs"));
const EditSubs = React.lazy(() => import("./EditSubs/EditSubs"));
const UserRegister = React.lazy(() => import("./UserRegister/UserRegister"));
const DashWelcome = React.lazy(() => import("../DashWelcome/DashWelcome"));
const MainLoader = React.lazy(() => import("../Loader/Loader"));
const AgentRegister = React.lazy(() => import("./AgentRegister/AgentRegister"));
const ChangePassword = React.lazy(() =>
  import("./ChangePassword/ChangePassword")
);
class DashBoard extends Component {
  render() {
    if (this.props.auth.user.type !== "admin") {
      this.props.history.push("/");
    }

    return (
      <div className="" style={{ height: "100vh" }}>
        <div className="row no-gutters">
          <div className="col-3">
            <AdminDashSideBar />
          </div>
          <div className="col-9">
            <Suspense fallback={<MainLoader />}>
              <Switch>
                <Route path="/admindash/" exact component={DashWelcome} />
                <Route path="/admindash/createuser" component={UserRegister} />
                <Route
                  path="/admindash/createagent"
                  component={AgentRegister}
                />
                <Route
                  path="/admindash/changepassword"
                  component={ChangePassword}
                />
                <Route path="/admindash/alldeals" component={AllDeals} />
                <Route path="/admindash/viewusers" component={ViewUsers} />
                <Route path="/admindash/actions" component={ActionsOfUser} />
                <Route path="/admindash/allagents" component={AllAgents} />
                <Route path="/admindash/agentssubs" component={AgentSubs} />
                <Route path="/admindash/viewsubs" component={EditSubs} />
                <Route path="/admindash/groups" component={GroupTickets} />
                <Route path="/admindash/demands" component={Demands} />
                <Route
                  path="/admindash/reqiurenames"
                  component={RequireNames}
                />
              </Switch>
            </Suspense>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.Auth,
  };
};

export default connect(mapStateToProps, { logOut })(withRouter(DashBoard));
