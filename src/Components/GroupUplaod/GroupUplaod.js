import React, { Component } from 'react'
import "./GroupUpload.css";
class GroupUplaod extends Component {
    render() {
        return (
            <div className="app allContent">
                <div className="p-2 heading">
                    <h2 className="h2 text-center mainHead my-4">DISPLAY UPLOAD RESULT</h2>
                </div>
                <div className=" container-fluid p-2 pl-3 d-flex">
                    <div className="countingSidbar ">
                        <h5 className="h5 text-center my-5 py-5">{"1)-"}</h5>
                    </div>
                    <div className="row p-3">
                        <div className="common">
                            {" "}
                            <div className="common py-1 px-3">
                                <h5 className="h5 text-center mainHead">Tour Type</h5>
                            </div>
                            <div
                                className="py-1 px-3"
                                style={{
                                    borderWidth: "1px",
                                    borderStyle: "solid",
                                    borderTop: "none"
                                }}
                            >
                                <h5 className="h5 text-center tourType">Umrah</h5>
                            </div>
                            <div className="py-1 px-1 common">
                                <h6 className="mainHead h6 text-center">Refundable/non</h6>
                            </div>
                            <div className="py-3 px-1 common">
                                <h6 className=" h6 text-center text-danger">Non-Refundable</h6>
                            </div>
                        </div>

                        <div className="common common2">
                            {" "}
                            <div className="common common2 py-1 px-3">
                                <h5 className="h5 text-center mainHead">Via/Direct</h5>
                            </div>
                            <div
                                className="py-1 px-3"
                                style={{
                                    borderWidth: "1px",
                                    borderStyle: "solid",
                                    borderTop: "none"
                                }}
                            >
                                <h5 className="h5 text-center tourType">Direct</h5>
                            </div>
                            <div className="py-1 px-1 common common2">
                                <h6 className="mainHead h6 text-center">Exchangeable/non</h6>
                            </div>
                            <div className="py-3 px-1 common common2">
                                <h6 className=" h6 text-center text-danger">Non-Exchangeable</h6>
                            </div>
                        </div>

                        <div className="common common2">
                            {" "}
                            <div className="common common2 py-1 px-3">
                                <h5 className="h5 text-center mainHead">Flight</h5>
                            </div>
                            <div
                                className="py-1 px-3"
                                style={{
                                    borderWidth: "1px",
                                    borderStyle: "solid",
                                    borderTop: "none"
                                }}
                            >
                                <h5 className="h5 text-center tourType">P.I.A (PK)</h5>
                            </div>
                            <div className="py-1 px-1 common common2">
                                <h6 className="mainHead h6 text-center">CRS/Airline ANR</h6>
                            </div>
                            <div className="py-3 px-1 common common2">
                                <h6 className=" h6 text-center text-success">AKSPHT</h6>
                            </div>
                        </div>

                        <div className="common common2">
                            {" "}
                            <div className="common common2 py-1 px-3">
                                <h5 className="h5 text-center mainHead">ONWARDS</h5>
                            </div>
                            <div
                                className="px-3 "
                                style={{
                                    borderWidth: "1px",
                                    borderStyle: "solid",
                                    borderTop: "none",
                                    fontSize: "14px",
                                    fontWeight: "600"
                                }}
                            >
                                {" "}
                                <p className="p text-left ">
                                    From:Jeddah <br />
                                    <span>&nbsp;&nbsp;&nbsp; To:Islamabad</span>
                                    <p className="p text-left ">
                                        Departure time: <br />
                                        <span>&nbsp;&nbsp;&nbsp; 09:35 am</span>
                                        <p className="p text-left ">
                                            Departure Date <br />
                                            <span>
                                                &nbsp;&nbsp;&nbsp; 20<sup>th</sup> OCT 2020
                    </span>
                                        </p>
                                    </p>
                                </p>
                            </div>
                        </div>

                        <div className="common common2">
                            {" "}
                            <div className="common common2 py-1 px-3">
                                <h5 className="h5 text-center mainHead">RETURN</h5>
                            </div>
                            <div
                                className="px-3 "
                                style={{
                                    borderWidth: "1px",
                                    borderStyle: "solid",
                                    borderTop: "none",
                                    fontSize: "14px",
                                    fontWeight: "600"
                                }}
                            >
                                {" "}
                                <p className="p text-left ">
                                    From:Jeddah <br />
                                    <span>&nbsp;&nbsp;&nbsp; To:Islamabad</span>
                                    <p className="p text-left ">
                                        Departure time: <br />
                                        <span>&nbsp;&nbsp;&nbsp; 09:35 am</span>
                                        <p className="p text-left ">
                                            Departure Date <br />
                                            <span>
                                                &nbsp;&nbsp;&nbsp; 20<sup>th</sup> OCT 2020
                    </span>
                                        </p>
                                    </p>
                                </p>
                            </div>
                        </div>

                        <div className="common common2">
                            {" "}
                            <div className="common common2 py-1 px-3">
                                <h5 className="h5 text-center mainHead">NO. OF SEATS</h5>
                            </div>
                            <div className="common common2">
                                <span className="px-4 py-1 common border-top-0 border-bottom-0 border-left-0">
                                    <span style={{ color: "green", fontWeight: "bold" }}> ADT</span>
                                    :<span className="text-danger font-weight-bold"> 30</span>
                                </span>
                                <span className="px-4 py-1 common border-top-0 border-bottom-0 border-left-0">
                                    <span style={{ color: "green", fontWeight: "bold" }}> CHD</span>
                                    :<span className="text-danger font-weight-bold"> 7</span>
                                </span>
                                <span className="px-4 py-1 common border-top-0 border-bottom-0 border-left-0 border-right-0 ">
                                    <span style={{ color: "green", fontWeight: "bold" }}>INF</span>:
                <span className="text-danger font-weight-bold"> 2</span>
                                </span>
                            </div>
                            <div className="common">
                                <h6 className="h6 text-center mainHead">Price Per Passanger</h6>
                            </div>
                            <div className="common d-flex font-weight-bold">
                                <span className="px-3 py-3 text-center">
                                    <span className="text-success">ADT</span>
                                    <br />
                                    <span>65000</span>
                                </span>
                                <span className="px-3 py-3 text-center ">
                                    <span className="text-primary">CHD</span>
                                    <br />
                                    <span>58000</span>
                                </span>
                                <span className="px-2 py-3">
                                    <span className="text-center text-warning">INF</span>
                                    <br />
                                    <span>30000</span>
                                </span>
                                <div className="common border-top-0 border-right-0 border-bottom-0">
                                    <div className="common border-top-0 border-right-0 border-left-0">
                                        <h6 className="h6 text-center mainHead px-4">Total</h6>
                                    </div>
                                    <h6
                                        className="text-center font-weight-bold"
                                        style={{ color: "blue" }}
                                    >
                                        24,16,000
                  <br />
                                        PKR
                </h6>
                                </div>
                            </div>
                        </div>

                        <div className="common common2">
                            {" "}
                            <div className="common common2 py-1 px-3">
                                <h6 className="h6 text-center mainHead">BOOKED/TICKETED</h6>
                            </div>
                            <div
                                className="py-1 px-3"
                                style={{
                                    borderWidth: "1px",
                                    borderStyle: "solid",
                                    borderTop: "none"
                                }}
                            >
                                <h5 className="h5 text-center tourType">BOOKED</h5>
                            </div>
                            <div className="py-1 px-1 common common2 d-flex justify-content-center">
                                <h6 className="mainHead h6 text-center">INSTALLMENTS</h6>
                                <h6 className="h6">&nbsp; : 2</h6>
                            </div>
                            <div className="common common2 font-weight-bold">
                                <p className="text-center">
                                    Advance :<span className="text-success">10,00,000</span>
                                    <p className="text-center">
                                        Remain :<span className="text-danger">14,16,000</span>
                                    </p>
                                </p>
                            </div>
                        </div>
                        <div className="verfiy text-center py-2 px-1">
                            <h6 className="text-white bg-success px-1">Verified</h6>
                            <h6 className="px-1">Group</h6>
                            <h6 className="px-1 text-success" style={{ fontSize: "15px" }}>
                                21 Days
            </h6>
                            <h6 className="px-1">Time left</h6>
                            <p className="">
                                hh-mm-sec
              <br />
                                20:10:09
            </p>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <p className="text-center">
                        <span className="text-white bg-danger px-4 rounded">
                            {" "}
                            Show More{" "}
                            <i className="fa fa-arrow-circle-down" aria-hidden="true"></i>{" "}
                        </span>

                        <span>
                            <p
                                className="text-white px-2 contact"
                                style={{ background: "blue" }}
                            >
                                {" "}
                                Contact :{" "}
                                <span style={{ fontWeight: "bold" }}>
                                    {" "}
                                    QURBAN INTERNATIONAL PVT LTD
              </span>
                                &nbsp; &nbsp; &nbsp; &nbsp; Ph No:
              <span style={{ fontWeight: "bold" }}> 051-1111111</span>
                                &nbsp; &nbsp; &nbsp; &nbsp; Whastapp No:
              <span style={{ fontWeight: "bold" }}> 0340-4111437</span>
                            </p>
                        </span>
                    </p>
                </div>
            </div>
















            // <div className="container-fluid">
            //     <div className="container-fluid ml-2  ">
            //         <div className="row no-gutters">
            //             <div className="col-5">
            //                 <div className="row">
            //                     <div className="col-4 border border-dark " style={{ padding: "0px" }}>
            //                         <div className="text-center border border-dark " >
            //                             <p className="font-weight-bold border-bottom border-dark ">Tour Type</p>
            //                             <p className="text-primary">Umrah</p>
            //                         </div>
            //                         <div className="text-center border border-dark  ">
            //                             <p className="font-weight-bold  border-bottom border-dark">Refundable/none</p>
            //                             <p className="text-danger">Refundable</p>
            //                         </div>
            //                     </div>
            //                     <div className="col-4 border border-dark " style={{ padding: "0px" }}>
            //                         <div className="text-center border border-dark " >
            //                             <p className="font-weight-bold  border-bottom border-dark">Via/Direct</p>
            //                             <p className="text-primary">Direct</p>
            //                         </div>
            //                         <div className="text-center border border-dark">
            //                             <p className="font-weight-bold  border-bottom border-dark ">Exchangeable/none</p>
            //                             <p className="text-danger">Exchangeable</p>
            //                         </div>
            //                     </div>


            //                     <div className="col-4 border border-dark " style={{ padding: "0px" }} >
            //                         <div className="text-center border border-dark " >
            //                             <p className="font-weight-bold  border-bottom border-dark">Flight</p>
            //                             <p className="text-primary">P.I.A(PK)</p>
            //                         </div>
            //                         <div className="text-center  border border-dark ">
            //                             <p className="font-weight-bold  border-bottom border-dark">CRS/AirlinePNR</p>
            //                             <p className="text-success">AKSPHT</p>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //             <div className="col-3 border border-dark  " style={{ marginLeft: "14px" }} >
            //                 <div className="row  no-gutters"  >
            //                     <div className="col-6" style={{}} >
            //                         <div className="text-center   " >
            //                             <p className="font-weight-bold  border-bottom border-dark">Onwards</p>
            //                             <p className=" mb-0 " style={{ marginTop: "-18px" }}>From : jEDDAH</p>
            //                             <p className=" mb-0">To : ISLAMABAD</p>
            //                             <p className=" mb-0">Departure Time :</p>
            //                             <p className=" mb-0">09:35 pm</p>
            //                             <p className=" mb-0">Departure Date :</p>
            //                             <p className=" mb-0">21 oct 2020</p>
            //                         </div>
            //                     </div>
            //                     <div className="col-6" >
            //                         <div className="text-center  border-left border-dark  " >
            //                             <p className="font-weight-bold  border-bottom border-dark">Return</p>
            //                             <p className=" mb-0 " style={{ marginTop: "-18px" }}>From : jEDDAH</p>
            //                             <p className=" mb-0">To : ISLAMABAD</p>
            //                             <p className=" mb-0">Departure Time :</p>
            //                             <p className=" mb-0">09:35 pm</p>
            //                             <p className=" mb-0">Departure Date :</p>
            //                             <p className=" mb-0">21 oct 2020</p>
            //                         </div>
            //                     </div>

            //                 </div>

            //             </div>

            //             <div className="col-4"></div>
            //         </div >

            //     </div >


            // </div >
        )
    }
}
export default GroupUplaod;
