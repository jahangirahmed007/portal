import React, { Component } from "react";

export default class CreateDeman extends Component {
  render() {
    return (
      <div className="container pt-3 text-center">
        <div
          className="bg-primary w-50 text-center pt-2 pb-2 pl-2 pr-2   "
          style={{ borderRadius: "10px", margin: "0 auto" }}
        >
          <h3
            className="p-2 mb-0   text-white  "
            style={{ border: "2px solid white", borderRadius: "10px" }}
          >
            Create Ticket Demand{" "}
          </h3>
        </div>
        <p
          className="border  border-dark py-1 mt-2 text-center  "
          style={{ margin: "0 auto", width: "200px" }}
        >
          TD No. : <span className="font-weight-bold">TD00001</span>{" "}
        </p>
        <div className="text-center pb-5 mt-5">
          <form>
            <div className="container">
              <div className="container">
                <div className="row no-gutters">
                  <div className="col-6 text-center">
                    <div className="form-group w-50 ">
                      <label htmlFor="exampleInputEmail1">
                        No. of Passengers:
                      </label>
                      <div className="row">
                        <div className="col-4">
                          <label htmlFor="exampleInputEmail1">Adult</label>
                          <input
                            type="number"
                            name=""
                            id=""
                            className="w-100"
                          />
                        </div>
                        <div className="col-4">
                          <label htmlFor="exampleInputEmail1"> Child</label>
                          <input
                            type="number"
                            name=""
                            id=""
                            className="w-100"
                          />
                        </div>
                        <div className="col-4">
                          <label htmlFor="exampleInputEmail1">Infant</label>
                          <input
                            type="number"
                            name=""
                            id=""
                            className="w-100"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group w-50">
                      <label htmlFor="exampleInputEmail1">Via/Direct:</label>
                      <select class="custom-select">
                        <option selected>Via</option>
                        <option value="1">Direct</option>
                      </select>
                    </div>

                    <div className="form-group w-50">
                      <label htmlFor="exampleInputEmail1">Stay Max:</label>
                      <input
                        type="time"
                        name=""
                        className="form-control"
                        id=""
                      />
                    </div>
                    <div className="form-group w-50">
                      <label htmlFor="exampleInputEmail1">Airline:</label>
                      <div className="row">
                        <div className="col-6">
                          {" "}
                          <select class="custom-select">
                            <option selected>Ticketed</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div className="col-6">
                          <select class="custom-select">
                            <option selected>Ticketed</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                          <a href="/"> Add More </a>
                        </div>
                      </div>
                    </div>

                    <div className="form-group ">
                      <div className="row mb-3 no-gutters">
                        <div className="col-6">
                          {" "}
                          <label htmlFor="exampleInputEmail1">
                            Departure Segment:
                          </label>
                        </div>
                        <div className="col-4">
                          <select class="custom-select">
                            <option selected>Pakistan</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>

                      <div className="row ">
                        <div className="col-5">
                          {" "}
                          <select class="custom-select">
                            <option selected>Islamabad</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div className="col-5">
                          <select class="custom-select">
                            <option selected>Lahore</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                          <a href="/"> Add More </a>
                        </div>
                      </div>
                    </div>
                    <div className="form-group ">
                      <div className="row mb-3 no-gutters">
                        <div className="col-6">
                          {" "}
                          <label htmlFor="exampleInputEmail1">
                            Arrival Segment:
                          </label>
                        </div>
                        <div className="col-4">
                          <select class="custom-select">
                            <option selected>Uk</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>

                      <div className="row ">
                        <div className="col-5">
                          {" "}
                          <select class="custom-select">
                            <option selected>Manchester</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div className="col-5">
                          <a href="/"> Add More </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Second column  */}

                  <div className="col-6 text-center">
                    <div className="form-group w-50">
                      <label htmlFor="exampleInputEmail1">
                        One Way/Return:
                      </label>
                      <select class="custom-select">
                        <option selected>Return</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>{" "}
                    <div className="form-group w-50">
                      <label htmlFor="exampleInputEmail1">Date:</label>
                      <input
                        type="date"
                        className="form-control"
                        name="date"
                        id=""
                      />
                    </div>{" "}
                    <div className="form-group w-50">
                      <label htmlFor="exampleInputEmail1">Refundable:</label>
                      <select class="custom-select">
                        <option selected>Yes</option>
                        <option value="1">No</option>
                      </select>
                    </div>{" "}
                    <div className="form-group w-50">
                      <label htmlFor="exampleInputEmail1">Exchange-Able:</label>
                      <select class="custom-select">
                        <option selected>Yes</option>
                        <option value="1">No</option>
                      </select>
                    </div>
                    <div className="form-group w-50">
                      <label htmlFor="exampleInputEmail1">
                        Give me Fare :Max 60m:
                      </label>

                      <input
                        type="number"
                        name=""
                        className="form-control"
                        id=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="bg-dark" />

            <button type="submit" className="btn btn-lg px-5  btn-primary">
              Create
            </button>
          </form>
        </div>
      </div>
    );
  }
}
