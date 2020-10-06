import React, { Component } from "react";

export default class EditSubs extends Component {
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
            View/Edit/Enter New{" "}
          </h3>
        </div>
        {/* <div className="row"> */}
        {/* <form className="form-inline mt-5">
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
            </form> */}

        {/* </div> */}
        <h4 className="mt-3 mb-2">
          PFA ID <b>PFA0001</b>
        </h4>
        <button
          className="btn text-white "
          style={{ backgroundColor: "#047AA9" }}
        >
          Add
        </button>
        <table class="table  table-hover text-center mt-3">
          <thead className=" text-light" style={{ backgroundColor: "#047AA9" }}>
            <tr>
              <th scope="col">Date & Month</th>
              <th scope="col">Year</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>

              <th scope="col">Currency</th>
              <th scope="col">Paid in</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr>
              <th scope="row" style={{ backgroundColor: "#ade4ea" }}>
                01 January
              </th>
              <td>2020</td>
              <td style={{ backgroundColor: "#ade4ea" }}>200 </td>
              <td>Recived </td>
              <td style={{ backgroundColor: "#ade4ea" }}>Pkr </td>
              <td>jazz Cash </td>
            </tr>
            <tr>
              <th scope="row" style={{ backgroundColor: "#ade4ea" }}>
                01 January
              </th>
              <td>2020</td>
              <td style={{ backgroundColor: "#ade4ea" }}>200 </td>
              <td>Recived </td>
              <td style={{ backgroundColor: "#ade4ea" }}>Pkr </td>
              <td>jazz Cash </td>
            </tr>
            <tr>
              <th scope="row" style={{ backgroundColor: "#ade4ea" }}>
                01 January
              </th>
              <td>2020</td>
              <td style={{ backgroundColor: "#ade4ea" }}>200 </td>
              <td>Recived </td>
              <td style={{ backgroundColor: "#ade4ea" }}>Pkr </td>
              <td>jazz Cash </td>
            </tr>
            <tr>
              <th scope="row" style={{ backgroundColor: "#ade4ea" }}>
                01 January
              </th>
              <td>2020</td>
              <td style={{ backgroundColor: "#ade4ea" }}>200 </td>
              <td>Recived </td>
              <td style={{ backgroundColor: "#ade4ea" }}>Pkr </td>
              <td>jazz Cash </td>
            </tr>
          </tbody>
        </table>
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
            AGENT ID ACTIVE STATUS{" "}
          </h3>
        </div>
        <h5 className="text-center mt-2">Your id is active till 02-10-2020</h5>
      </div>
    );
  }
}
