import React, { Component } from "react";

export default class ActionsOfUser extends Component {
  render() {
    return (
      <div className="p-4">
        <div
          className="bg-primary w-50 text-center pt-2 pb-2 pl-2 pr-2   "
          style={{ borderRadius: "10px", margin: "0 auto" }}
        >
          <h3
            className="p-2 mb-0   text-white  "
            style={{ border: "2px solid white", borderRadius: "10px" }}
          >
            ACTIONS OF USERS{" "}
          </h3>
        </div>
        <div className="mt-5">
          <p className="pl-5">
            {" "}
            *{" "}
            <span className="text-danger font-weight-bold ml-1">
              PFG-00002
            </span>{" "}
            <span className="text-success font-weight-bold ml-3">Verfied</span>
            &nbsp; by <span className="font-weight-bold ml-2">
              Portal Fare
            </span>{" "}
            <span className="ml-4">02-Aug-2020</span>{" "}
            <span className="ml-3">09:20:20</span>
          </p>
          <p className="pl-5">
            {" "}
            *{" "}
            <span className="text-danger font-weight-bold ml-1">
              PFG-00002
            </span>{" "}
            <span className="text-warning font-weight-bold ml-3">Rejects</span>
            &nbsp; by <span className="font-weight-bold ml-2">
              Portal Fare
            </span>{" "}
            <span className="ml-4">02-Aug-2020</span>{" "}
            <span className="ml-3">09:20:20</span>
          </p>
          <p className="pl-5">
            {" "}
            *{" "}
            <span className="text-danger font-weight-bold ml-1">
              PFG-00002
            </span>{" "}
            <span className="text-danger font-weight-bold ml-3">Delete</span>
            &nbsp; by <span className="font-weight-bold ml-2">
              Portal Fare
            </span>{" "}
            <span className="ml-4">02-Aug-2020</span>{" "}
            <span className="ml-3">09:20:20</span>
          </p>
        </div>
      </div>
    );
  }
}
