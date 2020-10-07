import React from "react";

const GroupTickets = () => {
  return (
    <div className="bg-light p-3">
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

        <div className="form-check form-check-inline ml-5">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            defaultValue="option1"
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            All
          </label>
        </div>
        <div className="form-check form-check-inline ml-5">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            defaultValue="option2"
          />
          <label className="form-check-label" htmlFor="inlineRadio2">
            Only Tickets
          </label>
        </div>
        <div className="form-check form-check-inline ml-5">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio3"
            defaultValue="option3"
          />
          <label className="form-check-label" htmlFor="inlineRadio3">
            Only Groups
          </label>
        </div>

        <button
          type="submit"
          style={{ backgroundColor: "#047AA9" }}
          className="btn  mb-2 ml-5 text-white"
        >
          Filter
        </button>
      </form>

      {/* Table */}
      <table className="table table-bordered mt-2 mb-5">
        <thead style={{ backgroundColor: "#047AA9", color: "#ffff" }}>
          <tr>
            <th scope="col">Sr.</th>
            <th scope="col">Group No.</th>
            <th scope="col">Ticket No.</th>
            <th scope="col">Travel Agency Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>PFA-0001</td>
            <td> </td>
            <td>Qutbain International</td>
            <td>
              <span className="text-primary">View &nbsp;</span>-{" "}
              <span className="">Not Yet &nbsp;</span> -{" "}
              <span className="text-success">Verified &nbsp;</span>-{" "}
              <span className="">Reject &nbsp;</span>-{" "}
              <span className="text-danger">Delete</span>{" "}
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>PFA-0001</td>
            <td> </td>
            <td>Qutbain International</td>
            <td>
              <span className="text-primary">View &nbsp;</span>-{" "}
              <span className="">Not Yet &nbsp;</span> -{" "}
              <span className="text-success">Verified &nbsp;</span>-{" "}
              <span className="">Reject &nbsp;</span>-{" "}
              <span className="text-danger">Delete</span>{" "}
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>PFA-0001</td>
            <td> </td>
            <td>Qutbain International</td>
            <td>
              <span className="text-primary">View &nbsp;</span>-{" "}
              <span className="">Not Yet &nbsp;</span> -{" "}
              <span className="text-success">Verified &nbsp;</span>-{" "}
              <span className="">Reject &nbsp;</span>-{" "}
              <span className="text-danger">Delete</span>{" "}
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>PFA-0001</td>
            <td> </td>
            <td>Qutbain International</td>
            <td>
              <span className="text-primary">View &nbsp;</span>-{" "}
              <span className="">Not Yet &nbsp;</span> -{" "}
              <span className="text-success">Verified &nbsp;</span>-{" "}
              <span className="">Reject &nbsp;</span>-{" "}
              <span className="text-danger">Delete</span>{" "}
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>PFA-0001</td>
            <td> </td>
            <td>Qutbain International</td>
            <td>
              <span className="text-primary">View &nbsp;</span>-{" "}
              <span className="">Not Yet &nbsp;</span> -{" "}
              <span className="text-success">Verified &nbsp;</span>-{" "}
              <span className="">Reject &nbsp;</span>-{" "}
              <span className="text-danger">Delete</span>{" "}
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>PFA-0001</td>
            <td> </td>
            <td>Qutbain International</td>
            <td>
              <span className="text-primary">View &nbsp;</span>-{" "}
              <span className="">Not Yet &nbsp;</span> -{" "}
              <span className="text-success">Verified &nbsp;</span>-{" "}
              <span className="">Reject &nbsp;</span>-{" "}
              <span className="text-danger">Delete</span>{" "}
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>PFA-0001</td>
            <td> </td>
            <td>Qutbain International</td>
            <td>
              <span className="text-primary">View &nbsp;</span>-{" "}
              <span className="">Not Yet &nbsp;</span> -{" "}
              <span className="text-success">Verified &nbsp;</span>-{" "}
              <span className="">Reject &nbsp;</span>-{" "}
              <span className="text-danger">Delete</span>{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GroupTickets;
