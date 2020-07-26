import React, { Component } from 'react'
import './Welcome.css';
import { Link } from 'react-router-dom'
export default class Welcome extends Component {
    render() {
        return (
            <div className=" bg-light p-4 d-flex justify-content-center">
                <div className="rounded-circle  mt-4 d-flex flex-column   align-items-center justify-content-center  shadow " style={{ height: "450px", width: "450px", backgroundColor: "#3C4B84" }}>



                    <div className="d-flex justify-content-center down">
                        <h3 className="text-white mb-3 size"> WELCOME </h3>
                        <h1 className='rotate '>TO</h1>
                    </div>
                    <div className="d-flex justify-content-center  align-items-center  flex-column">
                        <p className="port ">PORTAL</p>
                        <p className="fare ">FARE</p>
                    </div>
                    <div>
                        <Link to='/login' className="btn bg-white px-3 " style={{ color: "#3C4B84", fontWeight: "bold" }}>LOGIN</Link>
                    </div>





                </div>


            </div>
        )
    }
}
