import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../Actions/index";
class LoginAdmin extends Component {
  state = {
    username: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  componentDidMount() {
    if (
      this.props.auth.isAuthenticated === true &&
      this.props.auth.user.type === "admin"
    ) {
      this.props.history.push("/admindash");
    } else if (
      this.props.auth.isAuthenticated === true &&
      this.props.auth.user.type === "agent"
    ) {
      this.props.history.push("/agentdash");
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (
      nextProps.auth.isAuthenticated === true &&
      nextProps.auth.user.type === "admin"
    ) {
      this.props.history.push("/admindash");
    } else if (
      nextProps.auth.isAuthenticated === true &&
      nextProps.auth.user.type === "agent"
    ) {
      this.props.history.push("/agentdash");
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log(user);
    this.props.loginUser(user);
  };

  render() {
    console.log(this.props.auth);
    return (
      <div className=" bg-light p-4 d-flex justify-content-center">
        <div
          className="rounded-circle  mt-4 d-flex flex-column   align-items-center justify-content-center"
          style={{
            height: "450px",
            width: "450px",
            backgroundColor: "#3C4B84",
          }}
        >
          <h3 className="text-white mb-3"> LOGIN </h3>

          <form>
            <div className="form-group">
              <label className="text-white" htmlFor="username">
                USERNAME
              </label>
              <input
                type="text"
                value={this.state.username}
                className="form-control "
                onChange={this.handleChange}
                id="username"
                name="username"
                style={{ backgroundColor: "transparent", color: "white" }}
              />
            </div>
            <div className="form-group">
              <label className="text-white" htmlFor="password">
                PASSWORD
              </label>
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                name="password"
                id="password"
                className="form-control "
                style={{ backgroundColor: "transparent", color: "white" }}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button
                className="btn bg-white px-3 mt-2"
                style={{ color: "purple", fontWeight: "bold" }}
                onClick={this.handleSubmit}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.Auth,
});

export default connect(mapStateToProps, { loginUser })(LoginAdmin);
