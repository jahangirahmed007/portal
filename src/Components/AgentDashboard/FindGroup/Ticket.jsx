import React, { Component } from "react";

export default class Ticket extends Component {
  render() {
    return (
      <div className="text-center pb-5">
        <form>
          <div className="container">
            <div className="container">
              <div className="row no-gutters">
                <div className="col-6 text-center">
                  <div className="form-group w-50">
                    <label htmlFor="exampleInputEmail1">Tour Type:</label>
                    <select class="custom-select">
                      <option selected>UMRAH</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>

                  <div className="form-group w-50">
                    <label htmlFor="exampleInputEmail1">Airline:</label>
                    <select class="custom-select">
                      <option selected>Saudi Airline</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="form-group w-50">
                    <label htmlFor="exampleInputEmail1">
                      Reservation/Ticketed:
                    </label>
                    <select class="custom-select">
                      <option selected>Ticketed</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="form-group w-50">
                    <label htmlFor="exampleInputEmail1">Passenger:</label>
                    <select class="custom-select">
                      <option selected>Adult</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                {/* Second column  */}

                <div className="col-6 text-center">
                  <div className="form-group w-50">
                    <label htmlFor="exampleInputEmail1">One Way/Return:</label>
                    <select class="custom-select">
                      <option selected>Return</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>{" "}
                  <div className="form-group w-50">
                    <label htmlFor="exampleInputEmail1">Via/Direct:</label>
                    <select class="custom-select">
                      <option selected>Via</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>{" "}
                  <div className="form-group w-50">
                    <label htmlFor="exampleInputEmail1">
                      Departure segment:
                    </label>
                    <select class="custom-select">
                      <option selected>Islamabad-ISB</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>{" "}
                  <div className="form-group w-50">
                    <label htmlFor="exampleInputEmail1">
                      Destination Segment:
                    </label>
                    <select class="custom-select">
                      <option selected>Jeddah-JED</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-4">
            <div className="container">
              <div className="container ml-">
                <div className="row ml-5 no-gutters">
                  <div className="col-4">
                    <div className="form-group ">
                      <label htmlFor="exampleInputEmail1">
                        Departure Date:
                      </label>
                      <select class="custom-select">
                        <option selected>Date Range</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-4 ">
                    <div className="form-group w-50 ml-5">
                      <label htmlFor="from">From</label>
                      <input type="date" className="form-control" id="from" />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="form-group w-50 ">
                      <label htmlFor="to">To</label>
                      <input type="date" className="form-control" id="to" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="bg-dark" />

          <button type="submit" className="btn btn-lg btn-primary">
            Find Ticket
          </button>
        </form>
      </div>
    );
  }
}
