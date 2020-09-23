import React, { Component } from "react";

export default class OtherDemands extends Component {
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
            View Demands{" "}
          </h3>
        </div>
        <div className="container w-75  mt-5">
          <p>
            1)- <span className=" font-weight-bold">TD00001</span> /{" "}
            <span className=" font-weight-bold">
              ARFA SAEEDI TRAVELS & TOURS
            </span>
            /{" "}
            <span className=" font-weight-bold">
              Call/Whatsapp: 00923404111437
            </span>{" "}
          </p>
          {/* First Container */}
          <div className=" container d-flex justify-content-around border border-dark  pt-1 ">
            <div className="text-center">
              <h6 className=" font-weight-bold">Adult</h6>
              <p>03</p>
            </div>
            <div className="text-center">
              <h6 className=" font-weight-bold">Child </h6>
              <p>01 </p>
            </div>{" "}
            <div className="text-center">
              <h6 className=" font-weight-bold">Infant </h6>
              <p>01 </p>
            </div>{" "}
            <div className="text-center">
              <h6 className=" font-weight-bold">O/R</h6>
              <p>Yes </p>
            </div>{" "}
            <div className="text-center">
              <h6 className=" font-weight-bold">Exchangeable </h6>
              <p>One Way </p>
            </div>{" "}
            <div className="text-center">
              <h6 className=" font-weight-bold">Via/Direct</h6>
              <p className="">Via</p>
            </div>
            <div className="text-center">
              <h6 className=" font-weight-bold">Stay Max. </h6>
              <p>3 hours </p>
            </div>
            <div className="text-center">
              <h6 className=" font-weight-bold">Refundable </h6>
              <p>Yes </p>
            </div>{" "}
            <div className="text-center">
              <h6 className=" font-weight-bold"> Exchangeable </h6>
              <p>Yes </p>
            </div>
          </div>
          {/* Second container */}
          <div className=" container d-flex justify-content-around border border-dark  pt-1 ">
            <div className="text-center">
              <h6 className=" font-weight-bold">Departure Segments</h6>
              <p className="">Isalamabad PK-Lahore PK </p>
            </div>
            <div className="text-center">
              <h6 className=" font-weight-bold">destination Segments </h6>
              <p className="mb-0"> </p>
              <p>Manchester UK</p>
            </div>{" "}
            <div className="text-center">
              <h6 className=" font-weight-bold">Airline </h6>
              <p>Emirates-Etihad </p>
            </div>{" "}
            <div className="text-center">
              <h6 className=" font-weight-bold">Date</h6>
              <p className="  mb-0">26/28/29 aug 20 </p>
            </div>{" "}
          </div>
          <div className="text-center d-flex justify-content-center pt-3">
            <div>
              <div className="text-center">
                <h6 className=" font-weight-bold">Time Limit</h6>
                <p className="  mb-0">00:10:20 </p>
              </div>{" "}
            </div>
            <button className="btn btn-primary ml-4 btn-lg">Give Fare</button>
          </div>
        </div>
      </div>
    );
  }
}
