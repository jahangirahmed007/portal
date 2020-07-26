import React, { Component } from 'react'

export default class CreateGroup extends Component {
    state = {
        tourType: "",
        via_Direct: "",
        flight: "",
        oneway_return: "",
        booked_ticketed: "",
        adult: "",
        child: "",
        infants: "",
        refundable_nonRefundable: "",
        priceAdults: "",
        priceChilds: "",
        priceInfants: "",
        totalPrice: "",
        installments: "",
        firstInstall: "",
        secondInstall: "",
        expiryTime: "",
        CRS: "",
        airline: "",
        onwayfrom: "",
        onwayto: "",
        returnOnwards: "",
        returnDate: "",
        agentId: ""


    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    render() {
        return (
            <div>
                <div className="container-fluid border border-dark pt-2 pb-4">
                    <form action="">
                        <div className="row">
                            <div className="col-2">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1" >Tour Type</label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        <option>Select</option>
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
                                        <option>Select a value</option>
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
                                    <select className="form-control" onChange={this.handleChange} id="exampleFormControlSelect1" value={this.state.oneway_return} name="oneway_return" >
                                        <option>Select a value</option>
                                        <option>ONE WAY</option>
                                        <option>RETURN</option>

                                    </select>
                                </div>


                            </div>
                            {/* second column */}
                            <div className="col-3 ">

                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Booked/Ticketed</label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        <option>Select a value</option>
                                        <option>BOOKED/RESERVED</option>
                                        <option>TICKETED/ISSUED</option>

                                    </select>
                                </div>



                                <h4 className="h5">No. Of Seats</h4>
                                <div class="form-group row">
                                    <label for="exampleFormControlSelect1" className="col-4">Adult</label>
                                    <input type="number" className="form-control col-8" />
                                    {/* <select className="form-control col-8" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select> */}
                                </div>
                                <div class="form-group row">
                                    <label for="exampleFormControlSelect1" className="col-4">Child</label>
                                    <select className="form-control col-8" id="exampleFormControlSelect1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                        <option>13</option>
                                        <option>14</option>
                                        <option>15</option>
                                    </select>
                                </div>
                                <div class="form-group row">
                                    <label for="exampleFormControlSelect1" className="col-4">Infant</label>

                                    <select className="form-control col-8" id="exampleFormControlSelect1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <h4>TOTAL SEATS : 30</h4>
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Refundable/Non-Refundable</label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        <option>Select a value</option>
                                        <option>Refundable</option>
                                        <option>Non-Refundable</option>
                                    </select>
                                </div>


                            </div>
                            {/* Third Column */}
                            <div className="col-3 ml-4">
                                <h5 className="mb-5">Prices</h5>
                                <div class="form-group row " style={{ marginTop: "-35px" }}>
                                    <label for="exampleFormControlSelect1" className="col-4">Adult</label>
                                    <input type="text" className="form-control col-6" id="inlineFormInputGroup" placeholder="Amount" />
                                    <div className="input-group-prepend col-2 " style={{ marginLeft: "-16px" }}>
                                        <div className="input-group-text">X 30</div>
                                    </div>
                                </div>
                                <h5 className="text-center">PKR 2432400</h5>
                                <div class="form-group row">
                                    <label for="exampleFormControlSelect1" className="col-4">Child</label>
                                    <input type="text" className="form-control col-6" id="inlineFormInputGroup" placeholder="Amount" />
                                    <div className="input-group-prepend col-2 " style={{ marginLeft: "-16px" }}>
                                        <div className="input-group-text">X 30</div>
                                    </div>



                                </div>
                                <h5 className="text-center">PKR 2432400</h5>
                                <div class="form-group row">
                                    <label for="exampleFormControlSelect1" className="col-4">Infant</label>
                                    <input type="text" className="form-control col-6" id="inlineFormInputGroup" placeholder="Amount" />
                                    <div className="input-group-prepend col-2 " style={{ marginLeft: "-16px" }}>
                                        <div className="input-group-text">X 30</div>
                                    </div>
                                </div>
                                <h5 className="text-center">PKR 2432400</h5>
                            </div>
                            {/* Forth Column */}
                            <div className="col-3  ml-5">
                                <h5 className="mb-1">Installments</h5>
                                <div class="form-group">
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>

                                </div>
                                <div class="form-group ">
                                    <label for="exampleFormControlSelect1" className="">1st installment/Advance</label>
                                    <input type="text" className="form-control " id="inlineFormInputGroup" placeholder="Amount" />

                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1" className="">2nd Installment/Last</label>
                                    <input type="text" className="form-control " id="inlineFormInputGroup" placeholder="Amount" />
                                </div>
                                <div className="border border-primary "></div>
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1" className="mt-3 mb-2">Group Time Limit/Expiry Time</label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                </div>
                                <div className="border border-primary "></div>
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
                        <div className="row">
                            {this.state.oneway_return === "RETURN" ?
                                <React.Fragment>
                                    <div className="col-4 text-center">
                                        <h5 className="" style={{ marginLeft: "0px" }}>ONWARDS</h5>
                                        <div className="row ">
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label htmlFor="from">From</label>
                                                    <input type="date" className="form-control" id="from" />
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label htmlFor="to">To</label>
                                                    <input type="date" className="form-control" id="to" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-4 text-center">
                                        <h5 className="" style={{ marginLeft: "0px" }}>RETURN</h5>
                                        <div className="row ">
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label htmlFor="retfrom">From</label>
                                                    <input type="date" className="form-control" id="retfrom" />
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label htmlFor="retto">To</label>
                                                    <input type="date" className="form-control" id="retto" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </React.Fragment>

                                : <React.Fragment>
                                    <div className="col-2">
                                        <div className="form-group">
                                            <label htmlFor="from">From</label>
                                            <input type="date" className="form-control" id="from" />
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="form-group">
                                            <label htmlFor="to">To</label>
                                            <input type="date" className="form-control" id="to" />
                                        </div>
                                    </div>
                                </React.Fragment>

                            }

                        </div>


                        <button type="submit" className="btn btn-primary btn-lg  ">Upload</button>



                    </form>
                </div>

            </div>
        )
    }
}


