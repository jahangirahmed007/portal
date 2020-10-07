import React from "react";

const Demands = () => {
  return (
    <div className="p-4 bg-light">
      <form className="form-inline">
        <label htmlFor="inlineFormInputName2">Date: &nbsp;</label>
        {/* <input type="date" name="" id=""/> */}
        <input
          type="date"
          name="date"
          id=""
          className="form-control my-1 mr-sm-2 mr-3"
        />
        {/* <select
          className="custom-select my-1 mr-sm-2 mr-3"
          id="inlineFormInputName2"
        >
          <option selected>Choose...</option>
          <option>Latest Upload </option>
          <option>Verified</option>
          <option>Not Yet</option>
        </select> */}
        <label htmlFor="inlineFormInputName2">By Status &nbsp;</label>
        <select
          className="custom-select my-1 mr-sm-2 ml-3"
          id="inlineFormInputName2"
        >
          <option selected>All</option>
          <option>Time Left </option>
          <option>Incompleted</option>
          <option>Completed</option>
        </select>

        <button
          type="submit"
          style={{ backgroundColor: "#047AA9" }}
          className="btn  mb-2 ml-5 text-white"
        >
          Filter
        </button>
      </form>
      {/* Table */}
      <table className="table table-bordered mt-4 mb-5">
        <thead
          className="text-center"
          style={{ backgroundColor: "#047AA9", color: "#ffff" }}
        >
          <tr>
            <th scope="col">Sr.</th>
            <th scope="col">Demand No.</th>
            <th scope="col">Upload Date</th>
            <th scope="col">Time Left</th>

            <th scope="col">Demand From </th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>TD-0001</td>
            <td>25-Aug-2020 </td>
            <td>------ </td>

            <td>Qutbain International</td>
            <td>
              <span className="text-primary">View &nbsp;</span>-{" "}
              <span className="">Transfer &nbsp;</span> -{" "}
              <span className="">Incomplete &nbsp;</span> -{" "}
              <span className="text-success">Completed &nbsp;</span>-{" "}
              <span className="text-danger">Delete</span>{" "}
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>TD-0001</td>
            <td>25-Aug-2020 </td>
            <td>------ </td>

            <td>Qutbain International</td>
            <td>
              <span className="text-primary">View &nbsp;</span>-{" "}
              <span className="">Transfer &nbsp;</span> -{" "}
              <span className="">Incomplete &nbsp;</span> -{" "}
              <span className="text-success">Completed &nbsp;</span>-{" "}
              <span className="text-danger">Delete</span>{" "}
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>TD-0001</td>
            <td>25-Aug-2020 </td>
            <td>------ </td>

            <td>Qutbain International</td>
            <td>
              <span className="text-primary">View &nbsp;</span>-{" "}
              <span className="">Transfer &nbsp;</span> -{" "}
              <span className="">Incomplete &nbsp;</span> -{" "}
              <span className="text-success">Completed &nbsp;</span>-{" "}
              <span className="text-danger">Delete</span>{" "}
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>TD-0001</td>
            <td>25-Aug-2020 </td>
            <td>------ </td>

            <td>Qutbain International</td>
            <td>
              <span className="text-primary">View &nbsp;</span>-{" "}
              <span className="">Transfer &nbsp;</span> -{" "}
              <span className="">Incomplete &nbsp;</span> -{" "}
              <span className="text-success">Completed &nbsp;</span>-{" "}
              <span className="text-danger">Delete</span>{" "}
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>TD-0001</td>
            <td>25-Aug-2020 </td>
            <td>------ </td>

            <td>Qutbain International</td>
            <td>
              <span className="text-primary">View &nbsp;</span>-{" "}
              <span className="">Transfer &nbsp;</span> -{" "}
              <span className="">Incomplete &nbsp;</span> -{" "}
              <span className="text-success">Completed &nbsp;</span>-{" "}
              <span className="text-danger">Delete</span>{" "}
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>TD-0001</td>
            <td>25-Aug-2020 </td>
            <td>------ </td>

            <td>Qutbain International</td>
            <td>
              <span className="text-primary">View &nbsp;</span>-{" "}
              <span className="">Transfer &nbsp;</span> -{" "}
              <span className="">Incomplete &nbsp;</span> -{" "}
              <span className="text-success">Completed &nbsp;</span>-{" "}
              <span className="text-danger">Delete</span>{" "}
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>TD-0001</td>
            <td>25-Aug-2020 </td>
            <td>------ </td>

            <td>Qutbain International</td>
            <td>
              <span className="text-primary">View &nbsp;</span>-{" "}
              <span className="">Transfer &nbsp;</span> -{" "}
              <span className="">Incomplete &nbsp;</span> -{" "}
              <span className="text-success">Completed &nbsp;</span>-{" "}
              <span className="text-danger">Delete</span>{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Demands;
