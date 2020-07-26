import React, { Component } from 'react'

class DashWelcome extends Component {
    render() {
        return (
            <div>
                <div className=" bg-light p-4 d-flex justify-content-center">
                    <div className="rounded-circle  mt-4 d-flex flex-column   align-items-center justify-content-center  shadow " style={{ height: "450px", width: "450px", backgroundColor: "#3C4B84" }}>



                        <div className="d-flex justify-content-center " style={{
                            marginBottom: "-40px",
                            marginTop: "0px"
                        }}>
                            <h3 className="text-white mb-3 " style={{ fontSize: "50px" }}> WELCOME </h3>
                            <h1 className=' ' style={{
                                transform: "rotate(90deg)",
                                color: "yellow",
                                fontSize: "56px"
                            }} >TO</h1>
                        </div>
                        <div className="d-flex justify-content-center  align-items-center  flex-column">
                            <p className=" " style={{
                                fontSize: "100px",
                                color: "yellow",
                                fontWeight: "bold",
                                marginBottom: "-60px"
                            }}>PORTAL</p>
                            <p className=" " style={{
                                fontSize: "100px",
                                color: "darkgray",
                                fontWeight: "bold"
                            }}>FARE</p>
                        </div>





                    </div>


                </div>

            </div>
        )
    }
}

export default DashWelcome;
