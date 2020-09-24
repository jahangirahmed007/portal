import React, { Suspense } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Loader from 'react-loader-spinner';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import { Route, Switch } from "react-router-dom";
import MainLoader from "./Components/Loader/Loader";
import UserDashBoard from "./Components/UserDashBorad/UserDashBoard";
import GroupDetails from "./Components/AgentDashboard/GroupDetails/GroupDetails";
import CreateGroup from "./Components/AgentDashboard/CreateGroup";
import Groups from "./Components/AgentDashboard/Groups";
import PasswordChange from "./Components/PasswordChange/PasswordChange";
import ChangePassword from "./Components/AgentDashboard/ChangePassword/ChangePassword";
// import AdminDashSideBar from './Components/AdminDashSideBar/AdminDashSideBar';
// import GroupUplaod from './Components/GroupUplaod/GroupUplaod';
const Header = React.lazy(() => import("./Components/Header/Header"));
const LoginAdmin = React.lazy(() =>
  import("./Components/LoginAdmin/LoginAdmin")
);

const Welcome = React.lazy(() => import("./Components/Welcome/Welcome"));
const DashBoard = React.lazy(() => import("./Components/DashBoard/DashBoard"));
const AgentDashboard = React.lazy(() =>
  import("./Components/AgentDashboard/AgentDashboard")
);
// const UserRegister = React.lazy(() =>
//   import("./Components/UserRegister/UserRegister")
// );
// import AgentRegister from './Components/AgentRegister/AgentRegister';
// import CreateGroup from './Components/AgentDashboard/CreateGroup';
// import CreateTicket from './Components/AgentDashboard/CreateTicket';
// import Groups from './Components/AgentDashboard/Groups';

function App() {
  return (
    <div className="">
      <Suspense fallback={<MainLoader />}>
        <Header />
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/agentdash" component={AgentDashboard} />
          <Route path="/admindash" component={DashBoard} />
          <Route path="/Login" component={LoginAdmin} />{" "}
          {/* <Route path="/userregister" component={UserRegister} /> */}
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
