import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../Actions/index";
class LoginAdmin extends Component {
  state = {
    username: "",
    password: "",
    loader: false,
    errors: "",
    showPassword: false,
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
    console.log(nextProps, "next props");
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
    if (nextProps.errors.data) {
      this.setState({
        errors: nextProps.errors.data,
        loader: false,
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
    // if (this.props.erorr.Errors) {
    //   this.setState({
    //     loader: false,
    //   });
    // }
    this.setState({
      loader: true,
      errors: "",
    });
  };

  togglePassword = () => {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };
  render() {
    let err = this.state.errors;
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

          <form className="">
            <div className="form-group">
              <label className="text-white" htmlFor="username">
                USERNAME
              </label>
              <input
                type="text"
                value={this.state.username}
                className="   form-control"
                onChange={this.handleChange}
                id="username"
                name="username"
                style={{ backgroundColor: "transparent", color: "white" }}
              />

              <div className=" text-white">
                <b>{err.username}</b>{" "}
              </div>
            </div>
            <div className="form-group  ">
              <label className="text-white" htmlFor="password">
                PASSWORD
              </label>
              <div className="input-group">
                <input
                  type={this.state.showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="form-control "
                  value={this.state.password}
                  onChange={this.handleChange}
                  style={{ backgroundColor: "transparent", color: "white" }}
                />
                <div class="input-group-append">
                  {this.state.showPassword ? (
                    <apan
                      className="input-group-text"
                      onClick={this.togglePassword}
                      style={{ cursor: "pointer" }}
                    >
                      Hide
                    </apan>
                  ) : (
                    <apan
                      className="input-group-text"
                      onClick={this.togglePassword}
                      style={{ cursor: "pointer" }}
                    >
                      Show
                    </apan>
                  )}
                </div>
              </div>
              <div className=" text-white d-block">
                <b>{err.password}</b>{" "}
              </div>
            </div>
            {/* <div className="form-group">
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
              <div class="input-group-append">
                {this.state.hidden_one ? (
                  <apan className="input-group-text">Hide</apan>
                ) : (
                  <apan className="input-group-text">Show</apan>
                )}
              </div>
              <div className=" text-white">
                <b>{err.password}</b>{" "}
              </div>
            </div> */}
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn bg-white px-3 mt-2"
                style={{ color: "purple", fontWeight: "bold" }}
                onClick={this.handleSubmit}
                disabled={this.state.loader}
              >
                {this.state.loader ? "Loading" : "Login"}
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
  errors: state.Errors,
});

export default connect(mapStateToProps, { loginUser })(LoginAdmin);
