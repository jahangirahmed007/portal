import React, { Component } from "react";

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden_one: true,
      hidden_two: true,
      old_password: "",
      new_password: "",
      re_enter_password: "",
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleShowOne = this.toggleShowOne.bind(this);
    this.toggleShowTwo = this.toggleShowTwo.bind(this);
  }
  handlePasswordChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  componentDidMount() {
    if (this.props.old_password) {
      this.setState({ old_password: this.props.old_password });
    } else if (this.props.new_password) {
      this.setState({ new_password: this.props.new_password });
    }
  }

  toggleShowOne() {
    this.setState({ hidden_one: !this.state.hidden_one });
  }

  toggleShowTwo() {
    this.setState({ hidden_two: !this.state.hidden_two });
  }
  render() {
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
          <h3 className="text-white mb-3 h5"> Change Admin Password </h3>

          <form>
            <div className="form-group  ">
              <label className="text-white" htmlFor="old-password">
                OLD PASSWORD
              </label>
              <div className="input-group">
                <input
                  type={this.state.hidden_one ? "password" : "text"}
                  id="old-password"
                  name="old_password"
                  className="form-control "
                  value={this.state.old_password}
                  onChange={this.handlePasswordChange}
                  style={{ backgroundColor: "transparent", color: "white" }}
                />
                <div class="input-group-append">
                  {this.state.hidden_one ? (
                    <i
                      className="fas fa-eye pt-2 input-group-text"
                      id="togglePassword"
                      onClick={this.toggleShowOne}
                      style={{ fontSize: "14px" }}
                    ></i>
                  ) : (
                    <i
                      class="far fa-eye-slash pt-2  input-group-text "
                      onClick={this.toggleShowOne}
                      style={{ fontSize: "14px" }}
                    ></i>
                  )}
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="text-white" htmlFor="new-password">
                NEW PASSWORD
              </label>
              <div className="input-group">
                <input
                  type={this.state.hidden_two ? "password" : "text"}
                  id="new-password"
                  name="new_password"
                  className="form-control "
                  value={this.state.new_password}
                  onChange={this.handlePasswordChange}
                  style={{ backgroundColor: "transparent", color: "white" }}
                />
                <div class="input-group-append">
                  {this.state.hidden_two ? (
                    <i
                      className="fas fa-eye pt-2 input-group-text"
                      id="togglePassword"
                      onClick={this.toggleShowTwo}
                      style={{ fontSize: "14px" }}
                    ></i>
                  ) : (
                    <i
                      class="far fa-eye-slash pt-2  input-group-text "
                      onClick={this.toggleShowTwo}
                      style={{ fontSize: "14px" }}
                    ></i>
                  )}
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="text-white" htmlFor="password">
                RE-ENTER NEW PASSWORD
              </label>

              <input
                type="password"
                id="re-enter-password"
                name="re_enter_password"
                className="form-control "
                value={this.state.password}
                onChange={this.handlePasswordChange}
                style={{ backgroundColor: "transparent", color: "white" }}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button
                className="btn bg-white px-3 mt-2"
                style={{ color: "purple", fontWeight: "bold" }}
                // onClick={this.handleSubmit}
              >
                Confirm Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default ChangePassword;
