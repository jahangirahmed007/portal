import React from "react";

function Subscriptions() {
  return (
    <div className="container">
      <div className="d-flex justify-content-between mb-3 mt-5">
        <p className="mt-3">ID : PFA00001</p>
        <h3 className="bg-primary p-2 text-white rounded">My Subscriptions</h3>
      </div>
      <div>
        <table className="table table-bordered">
          <thead className=" bg-primary text-white text-center">
            <tr>
              <th scope="col">DATE & MONTH</th>
              <th scope="col">YEAR</th>
              <th scope="col">AMOUNT</th>
              <th scope="col">STATUS</th>
              <th scope="col">CURRENCY</th>
              <th scope="col">PAID VIA</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <th style={{ backgroundColor: "rgb(145, 171, 242)" }}>
                02 JANUARY
              </th>
              <td>2020</td>
              <td style={{ backgroundColor: "rgb(145, 171, 242)" }}>300</td>
              <td>PAID</td>
              <td style={{ backgroundColor: "rgb(145, 171, 242)" }}>PKR</td>
              <td>Jazz Cash </td>
            </tr>
            <tr>
              <th style={{ backgroundColor: "rgb(145, 171, 242)" }}>
                02 JANUARY
              </th>
              <td>2020</td>
              <td style={{ backgroundColor: "rgb(145, 171, 242)" }}>300</td>
              <td>PAID</td>
              <td style={{ backgroundColor: "rgb(145, 171, 242)" }}>PKR</td>
              <td>Jazz Cash </td>
            </tr>{" "}
            <tr>
              <th style={{ backgroundColor: "rgb(145, 171, 242)" }}>
                02 JANUARY
              </th>
              <td>2020</td>
              <td style={{ backgroundColor: "rgb(145, 171, 242)" }}>300</td>
              <td>PAID</td>
              <td style={{ backgroundColor: "rgb(145, 171, 242)" }}>PKR</td>
              <td>Jazz Cash </td>
            </tr>{" "}
            <tr>
              <th style={{ backgroundColor: "rgb(145, 171, 242)" }}>
                02 JANUARY
              </th>
              <td>2020</td>
              <td style={{ backgroundColor: "rgb(145, 171, 242)" }}>300</td>
              <td>PAID</td>
              <td style={{ backgroundColor: "rgb(145, 171, 242)" }}>PKR</td>
              <td>Jazz Cash </td>
            </tr>
          </tbody>
        </table>
        <div className="d-flex flex-column">
          <h3 className="text-center mt-5 mb-3  ">
            <span className="bg-primary p-2 rounded text-white">
              AGENT ID ACTIVE STATUS
            </span>
          </h3>

          <h4 className="text-center mt-5 mb-5">
            {" "}
            Your Id is active till{" "}
            <span className="text-danger">30 August</span>{" "}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Subscriptions;
