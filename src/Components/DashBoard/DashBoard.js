import React, { Component, Suspense } from 'react'
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { logOut } from '../../Actions/index';
import { Route, Switch } from 'react-router-dom';
import AdminDashSideBar from '../AdminDashSideBar/AdminDashSideBar';
const UserRegister = React.lazy(() => import('../UserRegister/UserRegister'));
const DashWelcome = React.lazy(() => import('../DashWelcome/DashWelcome'));
const MainLoader = React.lazy(() => import('../Loader/Loader'));
const AgentRegister = React.lazy(() => import('../AgentRegister/AgentRegister'));
class DashBoard extends Component {



    render() {
        if (this.props.auth.user.type !== "admin") {
            this.props.history.push('/')

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
                                <Route path='/admindash/' exact component={DashWelcome} />
                                <Route path='/admindash/createuser' component={UserRegister} />
                                <Route path='/admindash/createagent' component={AgentRegister} />



                            </Switch>
                        </Suspense>

                    </div>
                </div>

            </div >
        )
    }
};
const mapStateToProps = state => {
    return {
        auth: state.Auth
    }
}


export default connect(mapStateToProps, { logOut })(withRouter(DashBoard));