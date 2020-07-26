import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
export default class MainLoader extends Component {
    render() {
        return (
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Loader
                    type="Plane"
                    color="#3C4B84"
                    height={100}
                    width={100}
                    timeout={3000} />

            </div>
        )
    }
}
