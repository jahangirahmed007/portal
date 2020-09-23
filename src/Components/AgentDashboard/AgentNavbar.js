import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logOut } from "../../Actions/index";

class AgentNavbar extends Component {
  onLogOut = (e) => {
    e.preventDefault();
    this.props.logOut(this.props.history);
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div></div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              {" "}
              <button
                className=" btn btn-link text-dark mb-2"
                onClick={this.onLogOut}
              >
                LOGOUT
              </button>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                UPLOAD/FIND TICKET
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/agentdash/creategroup" className="dropdown-item">
                  UPLOAD GROUP
                </Link>
                <div className="dropdown-divider" />
                <Link to="/agentdash/find" className="dropdown-item">
                  FIND GROUP
                </Link>
                <div className="dropdown-divider" />

                <Link to="/agentdash/allTickets" className="dropdown-item">
                  View All Tickets
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                MY TICKETS
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/agentdash/uploaded" className="dropdown-item">
                  UPLOADED TICKETS
                </Link>
                <div className="dropdown-divider" />
                <Link to="/agentdash/donedeals" className="dropdown-item">
                  Done Deals
                </Link>
                <div className="dropdown-divider" />
                <Link to="/agentdash/whishlist" className="dropdown-item">
                  INTERESTED GROUPS
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                DEMANDS
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/agentdash/createdemand" className="dropdown-item">
                  CREATE DEMAND
                </Link>
                <div className="dropdown-divider" />
                <Link to="/agentdash/mydemands" className="dropdown-item">
                  MY DEMANDS
                </Link>
                <div className="dropdown-divider" />
                <Link to="/agentdash/otherdemands" className="dropdown-item">
                  VIEW DEMANDS
                </Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                REQUIRED NAMES
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/agentdash/uplaodnames" className="dropdown-item">
                  {" "}
                  UPLAOD NAMES
                </Link>
                <div className="dropdown-divider" />
                <Link to="/agentdash/allnames" className="dropdown-item">
                  VIEW ALL NAMES
                </Link>
                <div className="dropdown-divider" />

                <Link to="/agentdash/mynames" className="dropdown-item">
                  MY NAMES
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                MY PROFILE
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/agentdash/changepassword" className="dropdown-item">
                  CHANGE MY PASSWORD
                </Link>
                <div className="dropdown-divider" />
                <Link to="/agentdash/myprofile" className="dropdown-item">
                  EDIT MY PROFILE
                </Link>
                <div className="dropdown-divider" />

                <Link className="dropdown-item">DEALS HISTORY</Link>
                <div className="dropdown-divider" />
                <Link to="/agentdash/subscriptions" className="dropdown-item">
                  MY SUBSCRIPTIONS
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default connect(null, { logOut })(withRouter(AgentNavbar));
