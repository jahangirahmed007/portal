import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class UserSideBar extends Component {
    render() {
        return (

            <div className='' style={{ width: "20vw" }}>
                <div className="pt-2 " style={{ height: "130vh", backgroundColor: "#047AA9" }}>
                    <h2 className=" text-center" ><Link className=" text-white" style={{ textDecoration: "none" }} to='/'>USER PANEL</Link> </h2>
                    <div className="accordion mt-1 ml-0 pt-2 d-flex justify-content-start" style={{ height: "100vh", }} id="accordionExample">

                        <ul style={{ listStyle: "none", marginLeft: "-15px" }}>
                            <li>
                                <div className=" border-bottom">

                                    <h2 className="mb-2 mt-4 h3 ">
                                        <button className="container text-white " style={{ backgroundColor: "transparent", border: "none", outline: "none" }} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            TRAVEL AGENT
     </button>
                                    </h2>

                                    <div id="" className="" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <div className="border-top">
                                            <ul className="mt-2" style={{ listStyle: "none" }}>
                                                <li className=""><Link className="text-white mb-2" to='/'>CREATE AN AGENT</Link> </li>
                                                <li className="text-white mb-2">MODIFY AN AGENT</li>
                                                <li className="text-white mb-2">DELETE AN AGENT</li>
                                                <li className="text-white mb-2">APPROVE / REJECT GROUP</li>
                                                <li className="text-white mb-2">VIEW DEALS OF AGENTS</li>
                                                <li className="text-white mb-2">VIEW SUBSCRIPTIONS</li>
                                                <li className="text-white mb-2">VIEW DEMANDS</li>
                                                <li className="text-white mb-2">VIEW AGENTS</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </li>
                            <li>
                                <div className=" border-bottom">

                                    <h2 className="mb-2 mt-2 h3">
                                        <button className="container text-white " style={{ backgroundColor: "transparent", border: "none", outline: "none" }} type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            OTHERS
     </button>
                                    </h2>

                                    <div id="" className="" aria-labelledby="headingThree" data-parent="#accordionExample">
                                        <div className="border-top ">
                                            <ul className="mt-2" style={{ listStyle: "none" }}>
                                                <li className="text-white mb-2">FIND A GROUP</li>

                                            </ul>
                                        </div>
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
