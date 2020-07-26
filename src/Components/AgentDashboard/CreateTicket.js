import React, { Component } from 'react'

export default class CreateTicket extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <form action="">
                        <div className="row">
                            <div className="col-3">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1" >Tour Type</label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        <option>HAJJ</option>
                                        <option>UMRAH</option>
                                        <option>OTHERS</option>

                                    </select>
                                </div>

                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Via / Direct</label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        <option>VIA/STOP</option>
                                        <option>DIRECT/NON-STOP</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Flight</label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        <option>PK(PAKISTAN INTERNATIONAL AIRLINE)</option>
                                        <option>PA(AIRBLUE)</option>
                                        <option>NL(SHAHEEN AIR)</option>
                                        <option>SV(SAUDI AIRLINES)</option>
                                        <option>EK(FLY EMIRATES)</option>
                                        <option>EY(ETIHAD AIRWAYS)</option>
                                        <option>KU(KUWAIT AIRWAYS)</option>
                                        <option>GF(GULF AIRLINES)</option>
                                        <option>WY(OMAN AIR)</option>
                                        <option>OV(SALAM AIR)</option>
                                        <option>QR(QATAR AIRWAYS)</option>
                                        <option>G9(AIR ARABIA)</option>
                                        <option>FZ(FLY DUBAI)</option>
                                        <option>TK(TURKISH AIRWAYS)</option>
                                        <option>6S(SAUDI GULF)</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1"> One Way / Return</label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>


                            </div>
                            {/* second column */}
                            <div className="col-4 ">

                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Booked/Ticketed</label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div class="form-group ">
                                    <label for="exampleFormControlSelect1" className="">Passenger Type</label>
                                    <select className="form-control " id="exampleFormControlSelect1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div class="form-group ">
                                    <label for="exampleFormControlSelect1" className="">Fare</label>
                                    <input type="text" className="form-control" />

                                </div>
                                <h4>TOTAL FARE : <span className="text-info">PKR 63000</span> </h4>
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Refundable/Non-Refundable</label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        <option>Select a value</option>
                                        <option>Refundable</option>
                                        <option>Non-Refundable</option>
                                    </select>
                                </div>


                            </div>
                            {/* Forth Column */}
                            <div className="col-4  ml-5 pt-4">
                                <div className="border border-dark mt-3 "></div>
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1" className="mt-3 mb-2">Ticket Time Limit/Expiry Time</label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                </div>
                                <div className="border border-dark "></div>
                                <h4 className="h6 mt-3 mb-3">PNR/BOOKING REFERENCE NO.</h4>
                                <div className="row">

                                    <div class="form-group col-6">

                                        <label for="exampleFormControlSelect1" className="">CRS</label>
                                        <input type="text" className="form-control " id="inlineFormInputGroup" placeholder="" />


                                    </div>
                                    <div className="col-6">
                                        <div class="form-group ">
                                            <label for="exampleFormControlSelect1" className="">AIRLINE</label>
                                            <input type="text" className="form-control " id="inlineFormInputGroup" placeholder="" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <button className="btn btn-primary" >Upload</button>



                    </form>
                </div>

            </div>
        )
    }
}
