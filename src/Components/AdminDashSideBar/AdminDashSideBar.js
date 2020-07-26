import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { logOut } from '../../Actions/index';
import { Link } from 'react-router-dom';
class AdminDashSideBar extends Component {



    onLogOut = e => {
        e.preventDefault();
        this.props.logOut(this.props.history);

    }

    render() {
        return (
            <div className='' style={{ width: "20vw" }}>
                <div className="pt-2 " style={{ height: "130vh", backgroundColor: "#047AA9" }}>
                    <h2 className=" text-center" ><Link className=" text-white" style={{ textDecoration: "none" }} to='/admindash/'>ADMIN PANEL</Link> </h2>
                    <div className="accordion mt-5 ml-0 pt-2 d-flex justify-content-start" style={{ height: "100vh", }} id="accordionExample">

                        <ul style={{ listStyle: "none", marginLeft: "-15px" }}>
                            <li>
                                <div className=" mb-5 border-bottom">

                                    <h2 className="mb-2 mt-2 h3">
                                        <button className="container text-white " style={{ backgroundColor: "transparent", border: "none", outline: "none" }} type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            User

                                                </button>

                                    </h2>

                                    <div id="collapseOne" className="collapse  " aria-labelledby="headingOne" data-parent="#accordionExample">
                                        {/* <div className="border-top mt-4"> */}
                                        <ul className="" style={{ listStyle: "none" }}>
                                            <li className=""><Link className="text-white mb-2" to='/admindash/createuser'>CREATE A NEW USER</Link> </li>
                                            <li className="text-white mb-2">MODIFY A USER</li>
                                            <li className="text-white mb-2">DELETE A USER</li>
                                            <li className="text-white mb-2">VIEW ACTIONS OF A USER</li>
                                            <li className="text-white mb-2">VIEW USERS</li>
                                        </ul>

                                        {/* </div> */}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className=" border-bottom">

                                    <h2 className="mb-2 mt-5 h3 ">
                                        <button className="container text-white " style={{ backgroundColor: "transparent", border: "none", outline: "none" }} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            TRAVEL AGENT
     </button>
                                    </h2>

                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        {/* <div className="border-top"> */}
                                        <ul className="" style={{ listStyle: "none" }}>
                                            <li className=""><Link className="text-white mb-2" to='/admindash/createagent'>CREATE AN AGENT</Link> </li>
                                            <li className="text-white mb-2">MODIFY AN AGENT</li>
                                            <li className="text-white mb-2">DELETE AN AGENT</li>
                                            <li className="text-white mb-2">APPROVE / REJECT GROUP</li>
                                            <li className="text-white mb-2">VIEW DEALS OF AGENTS</li>
                                            <li className="text-white mb-2">VIEW SUBSCRIPTIONS</li>
                                            <li className="text-white mb-2">VIEW DEMANDS</li>
                                            <li className="text-white mb-2">VIEW AGENTS</li>
                                        </ul>
                                        {/* </div> */}
                                    </div>
                                </div>

                            </li>
                            <li>
                                <div className=" border-bottom">

                                    <h2 className="mb-2 mt-5 h3">
                                        <button className="container text-white " style={{ backgroundColor: "transparent", border: "none", outline: "none" }} type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            OTHERS
     </button>
                                    </h2>

                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                        {/* <div className="border-top"> */}
                                        <ul className="" style={{ listStyle: "none" }}>
                                            <li className="text-white mb-2">FIND A GROUP</li>

                                        </ul>
                                        {/* </div> */}
                                    </div>
                                </div>
                            </li>
                            <li className="d-flex justify-content-center mt-3 "> <button className=" btn btn-link text-white mb-2" onClick={this.onLogOut}>LOGOUT</button></li>
                        </ul>



                    </div>

                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        auth: state.Auth
    }
}

export default connect(mapStateToProps, { logOut })(withRouter(AdminDashSideBar));
