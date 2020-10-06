import React, { Component } from "react";

export default class AllDeals extends Component {
  render() {
    return (
      <div className="bg-light p-2 ">
        <div className="container   mt-5">
          <p>
            1)- <span className=" font-weight-bold">PFA-00001</span>{" "}
            <span className=" font-weight-bold">QUBTAIN INTERNATIONAL</span>
            {">"}
            <span className=" font-weight-bold">PFA-00002</span>{" "}
            <span className=" font-weight-bold">ARFA SAEEDI TRAVELS</span>{" "}
            <span className="ml-3 ">09:15:10</span>{" "}
            <span className="ml-5 ">16-Aug-2020</span>
          </p>
          {/* First Container */}
          <div className=" container d-flex justify-content-around border border-dark  pt-1 ">
            <div className="text-center">
              <h6 className=" font-weight-bold">Group No.</h6>
              <p>PFG0001</p>
            </div>
            <div className="text-center">
              <h6 className=" font-weight-bold">Type </h6>
              <p>Umrah </p>
            </div>{" "}
            <div className="text-center">
              <h6 className=" font-weight-bold">Passenger </h6>
              <p>
                {" "}
                <span>
                  <b>ADT:</b>03{" "}
                </span>{" "}
                <span className="ml-1">
                  <b>CHD:</b>01{" "}
                </span>{" "}
                <span className="ml-1">
                  <b>INF:</b>01{" "}
                </span>{" "}
              </p>
            </div>{" "}
            <div className="text-center">
              <h6 className=" font-weight-bold">O/R</h6>
              <p>Return </p>
            </div>{" "}
            <div className="text-center">
              <h6 className=" font-weight-bold">Airline </h6>
              <p>Saudi Airline </p>
            </div>{" "}
            <div className="text-center">
              <h6 className=" font-weight-bold">Airline PNR</h6>
              <p className="">JSJFLL</p>
            </div>
            <div className="text-center">
              <h6 className=" font-weight-bold">CRS PNR </h6>
              <p>----- </p>
            </div>
          </div>
          {/* Second container */}
          <div className=" container d-flex justify-content-around border border-dark  pt-1 ">
            <div className="text-center">
              <h6 className=" font-weight-bold">Date</h6>
              <p className="  mb-0">26-aug-2020 </p>
            </div>{" "}
            <div className="text-center">
              <h6 className=" font-weight-bold">Sector 1</h6>
              <p className="">Islamabad-Riyadh </p>
            </div>
            <div className="text-center">
              <h6 className=" font-weight-bold">sector 2 </h6>
              <p className="mb-0"> </p>
              <p>Riyadh-Jeddah</p>
            </div>{" "}
            <div className="text-center">
              <h6 className=" font-weight-bold">Date </h6>
              <p>15-Sep-2020 </p>
            </div>{" "}
            <div className="text-center">
              <h6 className=" font-weight-bold">sector 3 </h6>
              <p className="mb-0"> </p>
              <p>Jeddah-Islamabad</p>
            </div>{" "}
          </div>
          <div className="text-center d-flex justify-content-end pt-3">
            <button className="btn btn-primary ml-5 ">VIEW MORE</button>
          </div>
        </div>
      </div>
    );
  }
}
