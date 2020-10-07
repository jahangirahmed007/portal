import React from "react";

const RequireNames = () => {
  return (
    <div className="p-4 bg-light">
      <form className="form-inline">
        <label htmlFor="inlineFormInputName2">Sort By: &nbsp;</label>
        <select
          className="custom-select my-1 mr-sm-2 mr-3"
          id="inlineFormInputName2"
        >
          <option selected>Choose...</option>
          <option>Latest Upload </option>
          <option>Verified</option>
          <option>Not Yet</option>
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
            <th scope="col">RN No.</th>
            <th scope="col"> Flight</th>
            <th scope="col">Dep Date</th>
            <th scope="col">Travel Agency Name </th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>RN-00001</td>
            <td>Airarabia-G9 </td>
            <td>25-Aug-2020 </td>

            <td>Qutbain International</td>
            <td>
              <span className="text-primary">View &nbsp;</span>-{" "}
              <span className="">Not Yet &nbsp;</span> -{" "}
              <span className="text-success">Verified &nbsp;</span> -{" "}
              <span className="">Reject &nbsp;</span>-{" "}
              <span className="text-danger">Delete</span>{" "}
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>RN-00001</td>
            <td>Airarabia-G9 </td>
            <td>25-Aug-2020 </td>

            <td>Qutbain International</td>
            <td>
              <span className="text-primary">View &nbsp;</span>-{" "}
              <span className="">Not Yet &nbsp;</span> -{" "}
              <span className="text-success">Verified &nbsp;</span> -{" "}
              <span className="">Reject &nbsp;</span>-{" "}
              <span className="text-danger">Delete</span>{" "}
            </td>
          </tr>{" "}
          <tr>
            <th scope="row">1</th>
            <td>RN-00001</td>
            <td>Airarabia-G9 </td>
            <td>25-Aug-2020 </td>

            <td>Qutbain International</td>
            <td>
              <span className="text-primary">View &nbsp;</span>-{" "}
              <span className="">Not Yet &nbsp;</span> -{" "}
              <span className="text-success">Verified &nbsp;</span> -{" "}
              <span className="">Reject &nbsp;</span>-{" "}
              <span className="text-danger">Delete</span>{" "}
            </td>
          </tr>{" "}
          <tr>
            <th scope="row">1</th>
            <td>RN-00001</td>
            <td>Airarabia-G9 </td>
            <td>25-Aug-2020 </td>

            <td>Qutbain International</td>
            <td>
              <span className="text-primary">View &nbsp;</span>-{" "}
              <span className="">Not Yet &nbsp;</span> -{" "}
              <span className="text-success">Verified &nbsp;</span> -{" "}
              <span className="">Reject &nbsp;</span>-{" "}
              <span className="text-danger">Delete</span>{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RequireNames;
