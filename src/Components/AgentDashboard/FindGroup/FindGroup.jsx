import React, { Component } from "react";
import Group from "./Group";
import Ticket from "./Ticket";

export default class FindGroup extends Component {
  state = {
    group: true,
    ticket: false,
  };
  onRadio = () => {
    this.setState({
      ticket: true,
      group: false,
    });
  };
  onRadioOne = () => {
    this.setState({
      group: true,
      ticket: false,
    });
  };
  render() {
    return (
      <div className="container  mt-2 bg-light">
        <form action="" className="d-flex justify-content-center">
          <div className="form-group mr-4">
            <input
              type="radio"
              name="group"
              onClick={this.onRadioOne}
              id="group"
              value={this.state.group}
              defaultChecked={true}
            />
            <label className="ml-2" htmlFor="group">
              Group
            </label>
          </div>

          <div className="form-group">
            <input
              type="radio"
              name="group"
              onClick={this.onRadio}
              className=""
              value={this.state.ticket}
              id="ticket"
            />
            <label className="ml-2" htmlFor="ticket">
              Ticket
            </label>
          </div>
        </form>

        <>
          {this.state.group ? <Group /> : null}

          {this.state.ticket ? <Ticket /> : null}
        </>
      </div>
    );
  }
}
