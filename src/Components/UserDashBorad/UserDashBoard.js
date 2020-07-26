import React, { Component } from 'react';
import UserSideBar from './UserSideBar';



class UserDashBoard extends Component {
    state = {
        user: ""
    }

    render() {
        return (
            <div className="row no-gutters">
                <div className="col-4">

                    <UserSideBar />
                </div>
                <div className="col-8">

                </div>

            </div>
        )
    }
}
export default UserDashBoard;