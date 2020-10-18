import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logOut } from "../../Actions/index";
import { Link } from "react-router-dom";
class AdminDashSideBar extends Component {
  onLogOut = (e) => {
    e.preventDefault();
    this.props.logOut(this.props.history);
  };

  render() {
    return (
      <div className="" style={{ width: "20vw" }}>
        <div
          className="pt-2 "
          style={{ height: "130vh", backgroundColor: "#047AA9" }}
        >
          <h2 className=" text-center">
            <Link
              className=" text-white"
              style={{ textDecoration: "none" }}
              to="/admindash/"
            >
              ADMIN PANEL
            </Link>{" "}
          </h2>
          <div
            className="accordion mt-3 ml-0 d-flex justify-content-start"
            style={{ height: "100vh" }}
            id="accordionExample"
          >
            <ul
              className=" "
              style={{
                listStyle: "none",
                marginLeft: "-15px",
                width: "100%",
              }}
            >
              <li className="mb-4">
                <div className=" mb-2 ">
                  <h2 className="mb-2  h5">
                    <button
                      className="container text-white   border-bottom "
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        outline: "none",
                      }}
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseadd"
                      aria-expanded="true"
                      aria-controls="collapseadd"
                    >
                      ADMIN
                    </button>
                  </h2>

                  <div
                    id="collapseadd"
                    className="collapse  "
                    aria-labelledby="headingadd"
                    data-parent="#accordionExample"
                  >
                    <ul className="" style={{ listStyle: "none" }}>
                      <li className="">
                        <Link
                          className="text-white mb-2"
                          to="/admindash/alldeals"
                        >
                          VEIW ALL DEALS
                        </Link>{" "}
                      </li>
                      <li>
                        <Link
                          className="text-white mb-2"
                          to="/admindash/changepassword"
                        >
                          CHANGE MY PASSWORD
                        </Link>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <div className=" mb-2 ">
                  <h2 className="mb-2  h5">
                    <button
                      className="container text-white   border-bottom "
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        outline: "none",
                      }}
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      User
                    </button>
                  </h2>

                  <div
                    id="collapseOne"
                    className="collapse  "
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <ul className="" style={{ listStyle: "none" }}>
                      <li className="">
                        <Link
                          className="text-white mb-2"
                          to="/admindash/createuser"
                        >
                          CREATE A NEW USER
                        </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link
                          className="text-white mb-2"
                          to="/admindash/viewusers"
                        >
                          VIEW/EDIT ALL USERS{" "}
                        </Link>{" "}
                      </li>
                      <li>
                        <Link
                          className="text-white mb-2"
                          to="/admindash/actions"
                        >
                          VIEW ACTIONS OF USERS
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <div className="">
                  <h2 className="mb-2 mt-1 h5 ">
                    <button
                      className="container text-white   border-bottom "
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        outline: "none",
                      }}
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      AGENTS
                    </button>
                  </h2>

                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div className="">
                      <ul className="" style={{ listStyle: "none" }}>
                        <li className="">
                          <Link
                            className="text-white mb-2"
                            to="/admindash/createagent"
                          >
                            CREATE AGENTS
                          </Link>{" "}
                        </li>
                        {/* <li className="text-white mb-2">CREATE AGENTS</li> */}
                        <li>
                          <Link
                            className="text-white mb-2"
                            to="/admindash/allagents"
                          >
                            {" "}
                            VIEW ALL AGENTS
                          </Link>{" "}
                        </li>
                        <li>
                          <Link
                            className="text-white mb-2"
                            to="/admindash/agentssubs"
                          >
                            {" "}
                            AGENTS SUBSCRIPTIONS
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <div className="">
                  <h2 className="mb-2 mt-1 h5 ">
                    <button
                      className="container text-white   border-bottom "
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        outline: "none",
                      }}
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      ACTIONS
                    </button>
                  </h2>

                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div className="">
                      <ul className="" style={{ listStyle: "none" }}>
                        <li className="">
                          <Link
                            className="text-white mb-2"
                            to="/admindash/groups"
                          >
                            GROUP/TICKETS
                          </Link>{" "}
                        </li>
                        <li>
                          <Link
                            className="text-white mb-2"
                            to="/admindash/demands"
                          >
                            DEMANDS
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/admindash/reqiurenames"
                            className="text-white mb-2"
                          >
                            {" "}
                            REQUIRE NAMES
                          </Link>{" "}
                        </li>
                        {/* <li className="text-white mb-2">AGRNTS SUBSCRIPTIONS</li> */}
                        {/* <li className="text-white mb-2">VIEW DEALS OF AGENTS</li>
                    <li className="text-white mb-2">VIEW SUBSCRIPTIONS</li>
                    <li className="text-white mb-2">VIEW DEMANDS</li>
                    <li className="text-white mb-2">VIEW AGENTS</li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>{" "}
              <li className="mb-4">
                <div className="">
                  <h2 className="mb-2 mt-1 h5 ">
                    <button
                      className="container text-white   border-bottom"
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        outline: "none",
                      }}
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      ADD/EDIT CONTENTS
                    </button>
                  </h2>

                  <div
                    id="collapseFour"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div className="">
                      <ul className="" style={{ listStyle: "none" }}>
                        <li className="">
                          <Link
                            className="text-white mb-2"
                            to="/admindash/ticketsupload"
                          >
                            UPLOAD TICKETS
                          </Link>{" "}
                        </li>
                        <li > <Link  className="text-white mb-2" to="/admindash/findticket">FIND TICKETS</Link></li>
                        <li ><Link className="text-white mb-2" to="/admindash/createdemand"> CREATE DEMANED</Link> </li>
                        <li > <Link className="text-white mb-2" to="/admindash/groupsupload">UPLOAD GROUPS</Link> </li>
                        <li ><Link className="text-white mb-2" to="/admindash/findgroup">FIND GROUPS</Link> </li>
                        <li ><Link className="text-white mb-2" to="/admindash/requiredname"> REQUIRED NAME</Link></li>
                        <li>
                          <Link
                            className="text-white mb-2"
                            to="/admindash/agentfrom"
                          >
                            {" "}
                            AGENTS CREATION FORM
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="text-white mb-2"
                            to="/admindash/userform"
                          >
                            USERS CREATION FROM
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="d-flex justify-content-center mt-3  ">
                {" "}
                <button
                  className=" btn btn-link text-white mb-2 border-bottom"
                  onClick={this.onLogOut}
                >
                  LOGOUT
                </button>
              </li>
            </ul>
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

export default connect(mapStateToProps, { logOut })(
  withRouter(AdminDashSideBar)
);
