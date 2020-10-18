import React, { Component } from 'react'

export default class RequiredName extends Component {
    render() {
        return (
            <div className="bg-light p-4">
       
            <div className="row">
              <div className="col-3 ">
              <form>
                <label htmlFor="iata" className="font-weight-bold">Airlines</label>
                
              
                <input type="text" className="form-control" id="iata" />
              <button type="submit" style={{backgroundColor:"#047AA9",color:"white"}} className="btn  ml-1 mt-2 " >Add</button>
              </form>
              </div> 
              <div className="col-3">
              <div className="  mb-1  mt-4" style={{height:"100px" ,overflowY:"auto",border:"1px dashed #047AA9"}}></div>
              </div>
               
          <div className="col-3 mt-4 ">
              <form>
                <label htmlFor="iata" className="font-weight-bold">Refundable</label>
                <input type="text" className="form-control" id="iata" />
              
              <button type="submit" style={{backgroundColor:"#047AA9",color:"white"}} className="btn  ml-1 mt-2 " >Add</button>
              </form>
              </div>
              <div className="col-3 mt-5">
              <div className="  mb-1 " style={{height:"100px",overflowY:"auto",border:"1px dashed #047AA9"}}></div>
              </div>
              <div className="col-3 mt-4 ">
              <form>
                <label htmlFor="iata" className="font-weight-bold">Exchangable</label>
                <input type="text" className="form-control" id="iata" />
              
              <button type="submit" style={{backgroundColor:"#047AA9",color:"white"}} className="btn  ml-1 mt-2 " >Add</button>
              </form>
              </div>
              <div className="col-3 mt-5">
              <div className="  mb-1 " style={{height:"100px",overflowY:"auto",border:"1px dashed #047AA9"}}></div>
              </div><div className="col-3 mt-4 ">
              <form>
                <label htmlFor="iata" className="font-weight-bold">One Way/Return</label>
                <input type="text" className="form-control" id="iata" />
              
              <button type="submit" style={{backgroundColor:"#047AA9",color:"white"}} className="btn  ml-1 mt-2 " >Add</button>
              </form>
              </div>
              <div className="col-3 mt-5">
              <div className="  mb-1 " style={{height:"100px",overflowY:"auto",border:"1px dashed #047AA9"}}></div>
              </div><div className="col-3 mt-4 ">
              <form>
                <label htmlFor="iata" className="font-weight-bold">Via/Direct</label>
                <input type="text" className="form-control" id="iata" />
              
              <button type="submit" style={{backgroundColor:"#047AA9",color:"white"}} className="btn  ml-1 mt-2 " >Add</button>
              </form>
              </div>
              <div className="col-3 mt-5">
              <div className="  mb-1 " style={{height:"100px",overflowY:"auto",border:"1px dashed #047AA9"}}></div>
              </div>
              <div className="col-3 mt-4 ">
              <form>
                <label htmlFor="iata" className="font-weight-bold">Tour Type</label>
                <input type="text" className="form-control" id="iata" />
              
              <button type="submit" style={{backgroundColor:"#047AA9",color:"white"}} className="btn  ml-1 mt-2 " >Add</button>
              </form>
              </div>
              <div className="col-3 mt-5">
              <div className="  mb-1 " style={{height:"100px",overflowY:"auto",border:"1px dashed #047AA9"}}></div>
              </div>
              <div className="col-3 mt-4 ">
              <form>
                <label htmlFor="iata" className="font-weight-bold">Title</label>
                <input type="text" className="form-control" id="iata" />
              
              <button type="submit" style={{backgroundColor:"#047AA9",color:"white"}} className="btn  ml-1 mt-2 " >Add</button>
              </form>
              </div>
              <div className="col-3 mt-5">
              <div className="  mb-1 " style={{height:"100px",overflowY:"auto",border:"1px dashed #047AA9"}}></div>
              </div>
              <div className="col-3 mt-4 ">
              <form>
                <label htmlFor="iata" className="font-weight-bold">Airports</label>
               
                <input type="text" className="form-control" id="iata" />
              
              <button type="submit" style={{backgroundColor:"#047AA9",color:"white"}} className="btn  ml-1 mt-2 " >Add</button>
              </form>
              </div>
              <div className="col-3 mt-5">
              <div className="  mb-1 " style={{height:"100px",overflowY:"auto",border:"1px dashed #047AA9"}}></div>
              </div>
              <div className="col-3 mt-4 ">
              <form>
                <label htmlFor="iata" className="font-weight-bold">Passenger</label>
               
                <input type="text" className="form-control" id="iata" />
              
              <button type="submit" style={{backgroundColor:"#047AA9",color:"white"}} className="btn  ml-1 mt-2 " >Add</button>
              </form>
              </div>
              <div className="col-3 mt-5">
              <div className="  mb-1 " style={{height:"100px",overflowY:"auto",border:"1px dashed #047AA9"}}></div>
              </div>
              
             
              
            </div>
            <button className="btn mt-5 mb-5 "  style={{backgroundColor:"#047AA9",color:"white" ,marginLeft:"40%"}} >
               Save Changes
                </button>
          
          
          
                  
              </div>
        )
    }
}
