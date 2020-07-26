import React, { Component } from 'react'
import AgentNavbar from './AgentNavbar'
import { Switch, Route } from 'react-router-dom';
import Welcome from '../Welcome/Welcome';
// import CreateGroup from './CreateGroup';
import Groups from './Groups';

export default class AgentDashboard extends Component {
    render() {
        return (
            <div>
                <div>
                    <AgentNavbar />
                </div>


                <div>
                    <Switch>
                        <Route path='/agentdash/' exact component={Welcome} />
                        <Route path="/agentdash/creategroup" component={Groups} />
                    </Switch>
                </div>





            </div>
        )
    }
}
