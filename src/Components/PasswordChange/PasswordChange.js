import React, { Component } from 'react'

export default class PasswordChange extends Component {
    render() {
        return (
            <div className=" bg-light p-4 d-flex justify-content-center">
                <div className="rounded-circle  mt-4 d-flex flex-column   align-items-center justify-content-center" style={{ height: "450px", width: "450px", backgroundColor: "#3C4B84" }}>
                    <form style={{ width: "35vh" }}>
                        <div className="form-group">
                            <label className="text-white" htmlFor="password">ENTER OLD PASSWORD</label>
                            <input type="password" id="password" className="form-control " style={{ backgroundColor: "transparent", color: "white" }} />
                        </div>
                        <div className="form-group">
                            <label className="text-white" htmlFor="password">ENTER NEW PASSWORD</label>
                            <input type="password" id="password" className="form-control " style={{ backgroundColor: "transparent", color: "white" }} />
                        </div>
                        <div className="form-group">
                            <label className="text-white" htmlFor="password">RE-ENTER PASSWORD</label>
                            <input type="password" id="password" className="form-control outline-none " style={{ backgroundColor: "transparent", color: "white" }} />
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="btn bg-white px-3 mt-2" style={{ color: "purple", fontWeight: "bold" }}   >Change</button>
                        </div>
                    </form>


                </div>


            </div>
        )
    }
}
