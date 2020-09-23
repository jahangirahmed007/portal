import React, { Component } from "react";

export default class ViewAllNames extends Component {
  render() {
    return (
      <div className="container-fluid bg-light mt-2 pt-3 pt-5 pb-5 ">
        <div
          className="bg-primary w-25 text-center pt-2 pb-2 pl-2 pr-2   "
          style={{ borderRadius: "10px", margin: "0 auto" }}
        >
          <h3
            className="p-2 mb-0   text-white  "
            style={{ border: "2px solid white", borderRadius: "10px" }}
          >
            Reqired Names{" "}
          </h3>
        </div>
        <div className="container  w-75 text-center mt-5">
          <p>
            1)- <span className="text-primary font-weight-bold">RN00001</span>
          </p>
          {/* First Container */}
          <div className=" container d-flex justify-content-around border border-dark  pt-1 ">
            <div className="text-center">
              <h6 className=" font-weight-bold">Tours Type</h6>
              <p>UMRAH</p>
            </div>
            <div className="text-center">
              <h6 className=" font-weight-bold">Passenger </h6>
              <p>Adult </p>
            </div>{" "}
            <div className="text-center">
              <h6 className=" font-weight-bold">Title </h6>
              <p>MR </p>
            </div>{" "}
            <div className="text-center">
              <h6 className=" font-weight-bold">First/Given Name</h6>
              <p>MUHAMMAD IJAZ </p>
            </div>{" "}
            <div className="text-center">
              <h6 className=" font-weight-bold">Last Name </h6>
              <p>AHMAD </p>
            </div>{" "}
            <div className="text-center">
              <h6 className="font-weight-bold">Airline </h6>
              <p>Airblue </p>
            </div>
            <div className="text-center">
              <h6 className="font-weight-bold">O/R </h6>
              <p>Return </p>
            </div>
          </div>
          {/* Second container */}
          <div className=" container d-flex justify-content-around border border-dark  pt-1 ">
            <div className="text-center">
              <h6 className="text-success font-weight-bold">Via/Direct</h6>
              <p className="text-success">Via</p>
            </div>
            <div className="text-center">
              <h6 className="font-weight-bold">Date </h6>

              <p>25-aug-20</p>
            </div>{" "}
            <div className="text-center">
              <h6 className="font-weight-bold">Flight No. </h6>
              <p>G9-8891</p>
            </div>{" "}
            <div className="text-center">
              <h6 className=" font-weight-bold">Sector-1</h6>
              <p className="  mb-0">Sialkot-Sharjah </p>
              <p className="">03:00am 03:50am</p>
            </div>{" "}
            <div className="text-center">
              <h6 className="text-danger font-weight-bold">Stay At</h6>
              <p className="text-danger  mb-0">Sharjah </p>
              <p className="text-danger">for 2h 40m</p>
            </div>
            <div className="text-center">
              <h6 className=" font-weight-bold">Date</h6>
              <p className="">25-aug-20</p>
            </div>
            <div className="text-center">
              <h6 className=" font-weight-bold">Flight No.</h6>
              <p className="">G9-9=8822</p>
            </div>
            <div className="text-center">
              <h6 className="font-weight-bold">Sector-2 </h6>
              <p className="mb-0">Sharjah-Jeddah </p>
              <p>05:50pm - 06:00pm</p>
            </div>{" "}
          </div>
          {/* Third Container */}
          <div className=" container d-flex justify-content-around border border-dark  pt-1 ">
            <div className="text-center">
              <h6 className="text-success font-weight-bold">Via/Direct</h6>
              <p className="text-success">Via</p>
            </div>
            <div className="text-center">
              <h6 className="font-weight-bold">Date </h6>

              <p>25-aug-20</p>
            </div>{" "}
            <div className="text-center">
              <h6 className="font-weight-bold">Flight No. </h6>
              <p>G9-8891</p>
            </div>{" "}
            <div className="text-center">
              <h6 className=" font-weight-bold">Sector-3</h6>
              <p className="  mb-0">Sialkot-Sharjah </p>
              <p className="">03:00am 03:50am</p>
            </div>{" "}
            <div className="text-center">
              <h6 className="text-danger font-weight-bold">Stay At</h6>
              <p className="text-danger  mb-0">Sharjah </p>
              <p className="text-danger">for 2h 40m</p>
            </div>
            <div className="text-center">
              <h6 className=" font-weight-bold">Date</h6>
              <p className="">25-aug-20</p>
            </div>
            <div className="text-center">
              <h6 className=" font-weight-bold">Flight No.</h6>
              <p className="">G9-9=8832</p>
            </div>
            <div className="text-center">
              <h6 className="font-weight-bold">Sector-4 </h6>
              <p className="mb-0">Sharjah-Jeddah </p>
              <p>05:50pm - 06:00pm</p>
            </div>{" "}
          </div>

          {/* Fifth Container */}
          <div className=" container d-flex justify-content-around border border-dark  pt-1 ">
            <div className="text-center">
              <h6 className=" font-weight-bold"> Refundable </h6>
              <p className="mb-0">No </p>
            </div>{" "}
            <div className="text-center">
              <h6 className=" font-weight-bold">Exchangeable </h6>
              <p className="mb-0">Yes </p>
            </div>{" "}
            <div className="text-center">
              <h6 className="text-success font-weight-bold">CRS PNR</h6>
              <p className="text-success">-----</p>
            </div>
            <div className="text-center">
              <h6 className=" font-weight-bold">Airline PNR </h6>
              <p> 56574374</p>
            </div>{" "}
            <div className="text-center">
              <h6 className="text-danger font-weight-bold">Time Limit</h6>
              <p className="text-danger  mb-0">15:50:29 </p>
            </div>{" "}
            <div className="text-center d-flex flex-column ">
              <button className="btn btn-primary"> Request for Book</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
