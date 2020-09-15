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
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                href="/agentdash/"
                aria-expanded="false"
              >
                DASHBOARD
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/agentdash/" className="dropdown-item">
                  HOME
                </Link>
                <div className="dropdown-divider" />
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
                UPLOAD/FIND GROUPS
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/agentdash/creategroup" className="dropdown-item">
                  UPLOAD GROUP
                </Link>
                <div className="dropdown-divider" />
                <Link to="/agentdash/find" className="dropdown-item">
                  FIND GROUP
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
                MY GROUPS
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item">UPLOADED GROUPS</Link>
                <div className="dropdown-divider" />
                <Link to="/agentdash/donedeals" className="dropdown-item">
                  Done Deals
                </Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item">INTERESTED GROUPS</Link>
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
                DEMAND
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item">CREATE DEMAND</Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item">VIEW MY DEMANDS</Link>
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
                ACCOUNTS
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item">DEALS HISTORY</Link>
                <div className="dropdown-divider" />
                <Link to="/agentdash/subscriptions" className="dropdown-item">
                  MY SUBSCRIPTIONS
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
                CONTACT SUPPORT
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item">ABOUT US</Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item">CONTACTS</Link>
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
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default connect(null, { logOut })(withRouter(AgentNavbar));
