import React, { Component } from "react";

export default class AgentForm extends Component {
  render() {
    return <div className="bg-light p-4">
       
  <div className="row">
    <div className="col-3 ">
  <form className="">
      <label htmlFor="iata" className="font-weight-bold">IATA</label>
      <input type="text" className="form-control" id="iata" />
      <button type="submit" style={{backgroundColor:"#047AA9",color:"white"}} className="btn  ml-1 mt-2 " >Add</button>
    </form>
    </div> 
    <div className="col-3">
    <div className="  mb-1 mt-4" style={{height:"100px",overflowY:"auto",border:"1px dashed #047AA9"}}> <p>Yes</p> <p>No</p></div>
    </div>
    <div className="col-3 ">
    <form>
      <label htmlFor="iata" className="font-weight-bold">Countries</label>
      
      <input type="text" className="form-control" id="iata" />
      <button type="submit" style={{backgroundColor:"#047AA9",color:"white"}} className="btn  ml-1 mt-2 " >Add</button>
      </form>
    </div> 
    <div className="col-3">
    <div className="  mb-1  mt-4" style={{height:"100px" ,overflowY:"auto",border:"1px dashed #047AA9"}}><p>UAE</p></div>
    </div>
    
   
    
    <div className="col-3 ">
    <form>
      <label htmlFor="iata" className="font-weight-bold">Provinces</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    
      <input type="text" className="form-control" id="iata" />
    <button type="submit" style={{backgroundColor:"#047AA9",color:"white"}} className="btn  ml-4 mt-2 " >Add</button>
    </form>
    </div> 
    <div className="col-3">
    <div className="  mb-1  mt-4" style={{height:"120px" ,overflowY:"auto",border:"1px dashed #047AA9"}}></div>
    </div>
    
    
    
    
    <div className="col-3 ">
    <form>
      <label htmlFor="iata" className="font-weight-bold">Districts</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>  <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
     
      <input type="text" className="form-control" id="iata" />
    
    
    <button type="submit" style={{backgroundColor:"#047AA9",color:"white"}} className="btn  ml-4 mt-2 " >Add</button>
    </form>
    </div> 
    <div className="col-3 pt-4">
    <div className="  mb-1 " style={{height:"120px",overflowY:"auto",border:"1px dashed #047AA9"}}></div>
    </div>
    <div className="col-3 mt-4 ">
    <form>
      <label htmlFor="iata" className="font-weight-bold">Cities</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
        <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
     
      <input type="text" className="form-control" id="iata" />
     
    
    <button type="submit" style={{backgroundColor:"#047AA9",color:"white"}} className="btn  ml-4 mt-2 " >Add</button>
    </form>
    </div>
    <div className="col-3 mt-5">
    <div className="  mb-1 " style={{height:"160px",overflowY:"auto",border:"1px dashed #047AA9"}}></div>
    </div>
  </div>
  <button className="btn mt-3 "  style={{backgroundColor:"#047AA9",color:"white" ,marginLeft:"50%"}} >
     Save Changes
      </button>



        
    </div>;
  }
}
