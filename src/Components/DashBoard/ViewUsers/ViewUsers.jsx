import React, { Component } from "react";

export default class ViewUsers extends Component {
  render() {
    return (
      <div className="bg-light p-4">
        <div
          className="bg-primary w-50 text-center pt-2 pb-2 pl-2 pr-2   "
          style={{ borderRadius: "10px", margin: "0 auto" }}
        >
          <h3
            className="p-2 mb-0   text-white  "
            style={{ border: "2px solid white", borderRadius: "10px" }}
          >
            VIEW/EDIT ALL USERS{" "}
          </h3>
        </div>

        <table class="table table-bordered text-center mt-5">
          <thead className="bg-primary text-light">
            <tr>
              <th scope="col">Sr.</th>
              <th scope="col">PFU No.</th>
              <th scope="col">User full Name</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr>
              <th scope="row">1</th>
              <td>PFU-001</td>
              <td>Portal Fare </td>
              <td>
                {" "}
                <span>Edit</span> - <span>Activated</span> -{" "}
                <span>Deactivated </span> - <span>Delete</span>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>PFU-001</td>
              <td>Portal Fare </td>
              <td>
                {" "}
                <span>Edit</span> - <span>Activated</span> -{" "}
                <span>Deactivated </span> - <span>Delete</span>
              </td>
            </tr>{" "}
            <tr>
              <th scope="row">1</th>
              <td>PFU-001</td>
              <td>Portal Fare </td>
              <td>
                {" "}
                <span>Edit</span> - <span>Activated</span> -{" "}
                <span>Deactivated </span> - <span>Delete</span>
              </td>
            </tr>{" "}
            <tr>
              <th scope="row">1</th>
              <td>PFU-001</td>
              <td>Portal Fare </td>
              <td>
                {" "}
                <span>Edit</span> - <span>Activated</span> -{" "}
                <span>Deactivated </span> - <span>Delete</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
