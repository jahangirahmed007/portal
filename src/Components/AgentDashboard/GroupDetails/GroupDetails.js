import React, { Component } from 'react'
import './GroupDetails.css';
export default class GroupDetails extends Component {
    render() {
        return (
            <div className="container-fluid p-0" >
                <div className="allContent d-flex flex-column">
                    <div className="p-1">
                        <h2 className="h2 text-center booking my-4">Booking Page</h2>

                    </div>

                    <div className="inputHolders px-1 d-flex align-items-center no-gutters">
                        <div>
                            <h5 className="adultText">ADT 01 -</h5>
                        </div>
                        <div>
                            <select className="ml-1">
                                <option value="">MR</option>
                                <option value="">MRS</option>
                                <option value="">MS</option>
                            </select>
                        </div>
                        <div className="d-flex flex-column text-center ml-1">
                            <label htmlFor="typeFirst">Given/firstName</label>
                            <input
                                type="text"
                                id="typeFirst"
                                placeholder="Type first/Given Name"
                                className="text-center"
                            />
                        </div>
                        <div className="d-flex flex-column text-center ml-1">
                            <label htmlFor="typeLast">Surname/Last Name</label>
                            <input
                                type="text"
                                id="typeLast"
                                placeholder="Surname/Last Name"
                                className="text-center"
                            />
                        </div>
                        <div className="d-flex flex-column text-center ml-1">
                            <label htmlFor="typeDate">Date of Birth</label>
                            <input type="date" id="typeDate" className="border-0" />
                        </div>
                        <div className="d-flex flex-column text-center ml-1">
                            <label htmlFor="typeFirst">
                                <select>
                                    <option value="">Passport</option>
                                    <option value="">CNIC</option>
                                    <option value="">B-Form</option>
                                </select>
                            </label>
                            <input
                                type="text"
                                id="typeFirst"
                                placeholder="Enter Your Passport Number"
                            />
                        </div>
                        <div className="d-flex flex-column text-center ml-1">
                            <label htmlFor="typeCountry">Issuing Country</label>
                            <select id="typeCountry">
                                <option>Country</option>
                            </select>
                        </div>
                        <div className="d-flex flex-column text-center ml-1">
                            <label htmlFor="typeNationality">Nationality</label>
                            <select id="typeNationality">
                                <option>Nationality</option>
                            </select>
                        </div>
                        <div className="d-flex flex-column text-center ml-1">
                            <label htmlFor="typeDate">Expiry Date</label>
                            <input type="date" id="typeDate" className="border-0" />
                        </div>
                        <div className="d-flex text-center ml-1">
                            <p
                                className="font-weight-bold mt-5 p-1 rounded"
                                style={{ background: "black", color: "white" }}
                            >
                                SAVE
            </p>
                            <p className="font-weight-bold p-1 mt-5" style={{ color: "blue" }}>
                                02:59
            </p>
                        </div>
                    </div>

                    <div className="inputHolders px-1 d-flex align-items-center no-gutters">
                        <div>
                            <h5>CHD02-</h5>
                        </div>
                        <div>
                            <select className="ml-1">
                                <option value="">MISS</option>
                                <option value="">MSTR</option>
                            </select>
                        </div>
                        <div className="d-flex flex-column text-center ml-1">
                            <label htmlFor="typeFirst">Given/firstName</label>
                            <input
                                type="text"
                                id="typeFirst"
                                placeholder="Type first/Given Name"
                                className="text-center"
                            />
                        </div>
                        <div className="d-flex flex-column text-center ml-1">
                            <label htmlFor="typeLast">Surname/Last Name</label>
                            <input
                                type="text"
                                id="typeLast"
                                placeholder="Surname/Last Name"
                                className="text-center"
                            />
                        </div>
                        <div className="d-flex flex-column text-center ml-1">
                            <label htmlFor="typeDate">Date of Birth</label>
                            <input type="date" id="typeDate" className="border-0" />
                        </div>
                        <div className="d-flex flex-column text-center ml-1">
                            <label htmlFor="typeFirst">
                                <select>
                                    <option value="">Passport</option>
                                    <option value="">CNIC</option>
                                    <option value="">B-Form</option>
                                </select>
                            </label>
                            <input
                                type="text"
                                id="typeFirst"
                                placeholder="Enter Your Passport Number"
                            />
                        </div>
                        <div className="d-flex flex-column text-center ml-1">
                            <label htmlFor="typeCountry">Issuing Country</label>
                            <select id="typeCountry">
                                <option>Country</option>
                            </select>
                        </div>
                        <div className="d-flex flex-column text-center ml-1">
                            <label htmlFor="typeNationality">Nationality</label>
                            <select id="typeNationality">
                                <option>Nationality</option>
                            </select>
                        </div>
                        <div className="d-flex flex-column text-center ml-1">
                            <label htmlFor="typeDate">Expiry Date</label>
                            <input type="date" id="typeDate" className="border-0" />
                        </div>
                        <div className="d-flex text-center ml-1">
                            <p
                                className="font-weight-bold mt-5 p-1 rounded"
                                style={{ background: "black", color: "white" }}
                            >
                                SAVE
            </p>
                            <p className="font-weight-bold p-1 mt-5" style={{ color: "green" }}>
                                03:00
            </p>
                        </div>
                    </div>

                    <div className="inputHolders px-1 d-flex align-items-center no-gutters">
                        <div>
                            <h5 style={{ color: "grey" }}>INF 01-</h5>
                        </div>
                        <div>
                            <select className="ml-1">
                                <option value="">Male</option>
                                <option value="">Female</option>
                            </select>
                        </div>
                        <div className="d-flex flex-column text-center ml-1">
                            <label htmlFor="typeFirst">Given/firstName</label>
                            <input
                                type="text"
                                id="typeFirst"
                                placeholder="Type first/Given Name"
                                className="text-center"
                            />
                        </div>
                        <div className="d-flex flex-column text-center ml-1">
                            <label htmlFor="typeLast">Surname/Last Name</label>
                            <input
                                type="text"
                                id="typeLast"
                                placeholder="Surname/Last Name"
                                className="text-center"
                            />
                        </div>
                        <div className="d-flex flex-column text-center ml-1">
                            <label htmlFor="typeDate">Date of Birth</label>
                            <input type="date" id="typeDate" className="border-0" />
                        </div>
                        <div className="d-flex flex-column text-center ml-1">
                            <label htmlFor="typeFirst">
                                <select>
                                    <option value="">Passport</option>
                                    <option value="">CNIC</option>
                                    <option value="">B-Form</option>
                                </select>
                            </label>
                            <input
                                type="text"
                                id="typeFirst"
                                placeholder="Enter Your Passport Number"
                            />
                        </div>
                        <div className="d-flex flex-column text-center ml-1">
                            <label htmlFor="typeCountry">Issuing Country</label>
                            <select id="typeCountry">
                                <option>Country</option>
                            </select>
                        </div>
                        <div className="d-flex flex-column text-center ml-1">
                            <label htmlFor="typeNationality">Nationality</label>
                            <select id="typeNationality">
                                <option>Nationality</option>
                            </select>
                        </div>
                        <div className="d-flex flex-column text-center ml-1">
                            <label htmlFor="typeDate">Expiry Date</label>
                            <input type="date" id="typeDate" className="border-0" />
                        </div>
                        <div className="d-flex text-center ml-1">
                            <p
                                className="font-weight-bold mt-5 p-1 rounded"
                                style={{ background: "black", color: "white" }}
                            >
                                SAVE
            </p>
                            <p className="font-weight-bold p-1 mt-5" style={{ color: "green" }}>
                                03:00
            </p>
                        </div>
                    </div>
                </div>
                <div className="other calculation d-flex justify-content-between px-5 py-2">
                    <div>
                        <h6 style={{ fontWeight: "bold", color: "blue" }}>
                            ADULT : 3 X 70,000 = RS. 2,10,000
          </h6>
                        <h6 style={{ fontWeight: "bold" }}>
                            CHD : 2 X 60,000 = RS. 1,20,000
          </h6>
                        <h6 style={{ fontWeight: "bold", color: "grey" }}>
                            INF : 2 X 35,000 = RS. 70,000
          </h6>
                        <div className="border border-dark text-center"> <h6>TOTAL PAYABLE : <span style={{ color: "red" }}>RS. 475000</span></h6></div>
                    </div>
                    <div className="buttonBookingText d-flex flex-column">
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-primary mr-5">Save Draft</button>
                            <button className="btn btn-secondary">Send To Seller</button>
                        </div>
                        <div className="textHolding">
                            <h5>
                                <span className="h4">NOTE :</span>
                                <span className="text-danger ">
                                    "Send to seller" button will be disabled before seller
                                    confirmation.
              </span>
                            </h5>
                            <h5>
                                When Seller will approve to sell his seats it will be active
            </h5>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
