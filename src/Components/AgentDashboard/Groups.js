import React, { Component } from 'react'
import CreateGroup from './CreateGroup'
import CreateTicket from './CreateTicket'

export default class Groups extends Component {
    state = {
        group: true,
        ticket: false
    }
    onRadio = () => {
        this.setState({
            ticket: true,
            group: false
        })
    }
    onRadioOne = () => {
        this.setState({
            group: true,
            ticket: false
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className="container-fluid text-center">
                <form action="" className="d-flex justify-content-center">
                    <div className="form-group mr-4">
                        <input type="radio" name="group" onClick={this.onRadioOne} id="" value={this.state.group} defaultChecked={true} />
                        <label className="ml-2">Group</label>
                    </div>

                    <div className="form-group">
                        <input type="radio" name="group" onClick={this.onRadio} className="" value={this.state.ticket} id="" />
                        <label className="ml-2">Ticket</label>
                    </div>

                </form>
                <div>
                    {
                        this.state.group ? <CreateGroup /> : null}

                    {
                        this.state.ticket ? <CreateTicket /> : null
                    }
                </div>





            </div>
        )
    }
}
