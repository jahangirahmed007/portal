import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class AgentSubs extends Component {
  render() {
    return (
      <div className="bg-light p-4">
        <div
          className=" w-50 text-center pt-2 pb-2 pl-2 pr-2   "
          style={{
            borderRadius: "10px",
            margin: "0 auto",
            backgroundColor: "#047AA9",
          }}
        >
          <h3
            className="p-2 mb-0   text-white  "
            style={{ border: "2px solid white", borderRadius: "10px" }}
          >
            AGENTA SUBSCRIPTION{" "}
          </h3>
        </div>
        {/* <div className="row"> */}
        <form className="form-inline mt-5">
          <div className="form-group mb-2">
            <label htmlFor="staticEmail2">By PFA ID No.</label>
            <input
              type="text"
              className="form-control ml-1"
              id="staticEmail2"
              //   defaultValue="email@example.com"
            />
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <label htmlFor="inputPassword2">By Company Name</label>
            <input
              type="text"
              className="form-control ml-1"
              id="inputPassword2"
              placeholder=""
            />
          </div>
          <button
            type="submit"
            className="btn  mb-2 text-white"
            style={{ backgroundColor: "#3C4B84" }}
          >
            Search
          </button>
        </form>

        {/* </div> */}
        <table class="table table-bordered text-center mt-5">
          <thead className=" text-light" style={{ backgroundColor: "#047AA9" }}>
            <tr>
              <th scope="col">Sr.</th>
              <th scope="col">PFA No.</th>
              <th scope="col">Travel Agency Name</th>
              <th scope="col">Owner</th>

              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr>
              <th scope="row">1</th>
              <td>PFA-001</td>
              <td>ARFA SAEEDI TRAVELS </td>
              <td>HAFIZ IJAZ AHMED SAEDI </td>

              <td>
                {" "}
                <span>
                  <Link to="/admindash/viewsubs">View</Link>{" "}
                </span>{" "}
                / <span>Edit</span> / <span>Enter New Subscription </span>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>PFA-001</td>
              <td>ARFA SAEEDI TRAVELS </td>
              <td>HAFIZ IJAZ AHMED SAEDI </td>

              <td>
                {" "}
                <span>View</span> / <span>Edit</span> /{" "}
                <span>Enter New Subscription </span>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>PFA-001</td>
              <td>ARFA SAEEDI TRAVELS </td>
              <td>HAFIZ IJAZ AHMED SAEDI </td>

              <td>
                {" "}
                <span>View</span> / <span>Edit</span> /{" "}
                <span>Enter New Subscription </span>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>PFA-001</td>
              <td>ARFA SAEEDI TRAVELS </td>
              <td>HAFIZ IJAZ AHMED SAEDI </td>

              <td>
                {" "}
                <span>View</span> / <span>Edit</span> /{" "}
                <span>Enter New Subscription </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
