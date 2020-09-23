import React, { Component } from "react";

export default class UploadName extends Component {
  render() {
    return (
      <div className="container pt-3 ">
        <div
          className="bg-primary w-25 text-center pt-2 pb-2 pl-2 pr-2   "
          style={{ borderRadius: "10px", margin: "0 auto" }}
        >
          <h3
            className="p-2 mb-0   text-white  "
            style={{ border: "2px solid white", borderRadius: "10px" }}
          >
            Uplaod Names{" "}
          </h3>
        </div>
        <p
          className="border  border-dark py-1 mt-2 text-center  "
          style={{ margin: "0 auto", width: "200px" }}
        >
          RN No. : <span className="font-weight-bold">RN00001</span>{" "}
        </p>
        <div className=" pb-5 mt-5">
          <form>
            <div className="container">
              <div className="container">
                <div className="row no-gutters">
                  <div className="col-6 ">
                    <div className="form-group w-50 ">
                      <div className="row">
                        <div className="col-7">
                          <label htmlFor="exampleInputEmail1">
                            Adult/child/Infant:
                          </label>

                          <select class="custom-select">
                            <option selected>ADULT</option>
                            <option value="1">CHILD</option>
                            <option value="1">INFANT</option>
                          </select>
                        </div>
                        <div className="col-5">
                          <label htmlFor="exampleInputEmail1">Title</label>
                          <select class="custom-select">
                            <option selected>MR</option>
                            <option value="1">MRS</option>
                            <option value="1">MISS</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="form-group w-50">
                      <label htmlFor="exampleInputEmail1">
                        First/Given Name:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                      />
                    </div>

                    <div className="form-group w-50">
                      <label htmlFor="exampleInputEmail1">Last/Surname:</label>
                      <input
                        type="text"
                        name=""
                        className="form-control"
                        id=""
                      />
                    </div>
                    <div className="form-group w-50">
                      <label htmlFor="exampleInputEmail1">Airline:</label>

                      <select class="custom-select">
                        <option selected>Air Arabia - G9</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>

                    <div className="form-group ">
                      <div className="row mb-3 ">
                        <div className="col-4">
                          {" "}
                          <label htmlFor="exampleInputEmail1">Currency:</label>
                          <select class="custom-select">
                            <option selected>PKR</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div className="col-4">
                          <label htmlFor="exampleInputEmail1">
                            Payable Fare:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name=""
                            id=""
                          />
                        </div>
                      </div>
                      <div className="form-group w-50 ">
                        <label htmlFor="exampleInputEmail1">Tour Type:</label>
                        <select class="custom-select">
                          <option selected>UMRAH</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* Second column  */}

                  <div className="col-6">
                    <div className="form-group w-50">
                      <label htmlFor="exampleInputEmail1">Refundable:</label>
                      <select class="custom-select">
                        <option selected>No</option>
                        <option value="1">Yes</option>
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
                      <label htmlFor="exampleInputEmail1">CRS PNR:</label>
                      <input type="text" className="form-control" />
                    </div>{" "}
                    <div className="form-group w-50">
                      <label htmlFor="exampleInputEmail1">Airline PNR:</label>

                      <input
                        type="text"
                        name=""
                        className="form-control"
                        id=""
                      />
                    </div>
                    <div className="form-group w-50">
                      <label htmlFor="exampleInputEmail1">
                        Booking Time Limit:
                      </label>

                      <input
                        type="time"
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
              Uplaod
            </button>
          </form>
        </div>
      </div>
    );
  }
}
