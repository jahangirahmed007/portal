import React, { Component } from "react";

export default class WishList extends Component {
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
            Wishlist Tickets{" "}
          </h3>
        </div>
        <div className="container  mt-5">
          <p>
            1)-{" "}
            <span className="text-primary font-weight-bold">
              Group No. PEG0001
            </span>{" "}
            /{" "}
            <span className="text-primary font-weight-bold">
              ARFA SAEEDI TRAVELS & TOURS
            </span>
            /{" "}
            <span className="text-primary font-weight-bold">
              Call/Whatsapp: 00923404111437
            </span>{" "}
          </p>
          {/* First Container */}
          <div className=" container d-flex justify-content-around border border-dark  pt-1 ">
            <div className="text-center">
              <h6 className="text-primary font-weight-bold">Tours Type</h6>
              <p>UMRAH</p>
            </div>
            <div className="text-center">
              <h6 className="text-primary font-weight-bold">Airline </h6>
              <p>Saudi Airline - SV </p>
            </div>{" "}
            <div className="text-center">
              <h6 className="text-primary font-weight-bold">
                Reservation/Tickted{" "}
              </h6>
              <p>Ticketed </p>
            </div>{" "}
            <div className="text-center">
              <h6 className="text-primary font-weight-bold">Refundable</h6>
              <p>Yes </p>
            </div>{" "}
            <div className="text-center">
              <h6 className="text-primary font-weight-bold">Exchangeable </h6>
              <p>Yes </p>
            </div>{" "}
            <div className="text-center">
              <h6 className="text-primary font-weight-bold">O/R </h6>
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
              <h6 className="text-primary font-weight-bold">
                Sector 1 Onwards{" "}
              </h6>
              <p className="mb-0">Isalamabad-Riyadh </p>
              <p>10:50am - 02:50pm</p>
            </div>{" "}
            <div className="text-center">
              <h6 className="text-primary font-weight-bold">Dep. Date </h6>
              <p>25-aug-20 </p>
            </div>{" "}
            <div className="text-center">
              <h6 className="text-danger font-weight-bold">Stay at</h6>
              <p className="text-danger  mb-0">Riyadh </p>
              <p className="text-danger">2h 10m</p>
            </div>{" "}
            <div className="text-center">
              <h6 className="text-primary font-weight-bold">
                Sector 2 Onwards{" "}
              </h6>
              <p className="mb-0">Riyadh-Jeddah </p>
              <p>05:50pm - 06:00pm</p>
            </div>{" "}
            <div className="text-center">
              <h6 className="text-primary font-weight-bold">Dep. Date </h6>
              <p>25-aug-20 </p>
            </div>
          </div>
          {/* Third Container */}
          <div className=" container d-flex justify-content-center border border-dark  pt-1 ">
            <div className="container d-flex justify-content-center">
              <div className=" text-center ">
                <h6 className="text-success font-weight-bold">Via/Direct</h6>
                <p className="text-success">Direct</p>
              </div>
              <div className="text-center ml-5">
                <h6 className="text-primary font-weight-bold">
                  Sector Return{" "}
                </h6>
                <p className="mb-0">Jeddah-Isalamabad </p>
                <p>10:50am - 02:50pm</p>
              </div>
              <div className="text-center ml-5">
                <h6 className="text-primary font-weight-bold">Dep. Date</h6>
                <p>16-sep-20 </p>
              </div>
            </div>
          </div>
          {/* Forth Container */}
          <div className=" container d-flex justify-content-around border border-dark  pt-1 ">
            <div className="text-center ">
              <h6 className="text-success font-weight-bold">
                Passenger & Fare per
              </h6>

              <div className="d-flex">
                <div className=" ">
                  <p className="text-success mb-0">ADT: 05</p>
                  <p className="text-success">PKR : 65,000</p>
                </div>
                <div
                  style={{
                    padding: "1px",
                    height: "50px",
                    backgroundColor: "grey",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                ></div>
                <div className=" ">
                  <p className="text-success mb-0">CHD: 02</p>
                  <p className="text-success">PKR : 59,000</p>
                </div>
                <div
                  style={{
                    padding: "1px",
                    height: "50px",
                    backgroundColor: "grey",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                ></div>{" "}
                <div className=" ">
                  <p className="text-success mb-0">INF: 01</p>
                  <p className="text-success">PKR : 23,000</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h6 className="text-primary font-weight-bold">Total</h6>
              <p
                className="border border-danger px-5"
                style={{
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                PKR: 4,66000{" "}
              </p>
            </div>{" "}
            <div className="text-center ">
              <h6 className="text-success font-weight-bold">Installments</h6>

              <div className="d-flex">
                <div className=" ">
                  <p className="text-success mb-0">1st:</p>
                  <p className="text-success">PKR : 2,00,000</p>
                </div>
                <div
                  style={{
                    padding: "1px",
                    height: "50px",
                    backgroundColor: "grey",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                ></div>
                <div className=" ">
                  <p className="text-success mb-0">2nd:</p>
                  <p className="text-success">PKR : 2.00,000</p>
                </div>
                <div
                  style={{
                    padding: "1px",
                    height: "50px",
                    backgroundColor: "grey",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                ></div>{" "}
                <div className=" ">
                  <p className="text-success mb-0">3rd</p>
                  <p className="text-success">PKR : 2,66,000</p>
                </div>
              </div>
            </div>
          </div>
          {/* Fifth Container */}
          <div className=" container d-flex justify-content-around border border-dark  pt-1 ">
            <div className="text-center">
              <h6 className="text-success font-weight-bold">CRS PNR</h6>
              <p className="text-success">KWRTSS</p>
            </div>
            <div className="text-center">
              <h6 className="text-primary font-weight-bold">Airline PNR </h6>
              <p className="mb-0">JSSTYU </p>
            </div>{" "}
            <div className="text-center">
              <h6 className="text-primary font-weight-bold">Others PNR </h6>
              <p> </p>
            </div>{" "}
            <div className="text-center">
              <h6 className="text-danger font-weight-bold">
                Booking Time Limit
              </h6>
              <p className="text-danger  mb-0">15:50:29 </p>
            </div>{" "}
            <div className="text-center d-flex flex-column ">
              <button className="btn btn-primary"> Request for Book</button>
              <a href="/" className="text-primary font-weight-bold">
                Added{" "}
                <i
                  class="fa fa-star
"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
