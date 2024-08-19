import React from "react";
import { Form } from "react-bootstrap";

import { Redirect } from "react-router-dom";

class GroupRegistrationForm extends React.Component {
  constructor() {
    super();

    this.state =
      JSON.parse(localStorage.getItem("groupRegistrationForm")) || {};
  }

  handleChange = e => {
    console.log(e.target.value);

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    localStorage.setItem("groupRegistrationForm", JSON.stringify(this.state));
    this.setState({
      submissionSuccessful: true,
    });
  };

  render() {
    return (
      <div
        className="container shadow py-4"
        style={{ height: "auto", marginTop: "8em" }}
      >
        <p className="lead font-weight-bold"> Registration form</p>

        {/* -------------------------------------------------------- */}
        {/* FORM STARTS HERE  */}

        <Form onSubmit={this.handleSubmit} className="col-md-8 col-12 mx-auto">
          {/* ------------------------------------------------------- */}
          {/* Group Details */}

          <p
            className="text-center offset-0 col-12 shadow p-1  rounded"
            style={{
              backgroundColor: "rgba(238, 144, 159, 0.904)",
              color: "rgb(255, 241, 253)",
            }}
          >
            Group Details
          </p>

          <div className="form-row">
            <div class="form-group col-md-6 col-12 p-1">
              <label for="leaderName">
                Group Leader Name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                class="form-control"
                id="leaderName"
                name="leaderName"
                value={this.state.leaderName}
                placeholder="Enter group leader's name"
                onChange={this.handleChange}
                required
              />
            </div>
            <div class="form-group col-md-6 col-12 p-1">
              <label for="leaderRollNumber">
                Group Leader Roll Number <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="number"
                class="form-control"
                id="leaderRollNumber"
                name="leaderRollNumber"
                placeholder="Enter group leader's roll number"
                value={this.state.leaderRollNumber}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div class="form-group col-md-6 col-12 mx-auto p-1">
            <label for="leaderEmailID">
              Group Leader Email Address <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="email"
              class="form-control"
              id="leaderEmailID"
              name="leaderEmailID"
              value={this.state.leaderEmailID}
              onChange={this.handleChange}
              placeholder="Enter group leader's email ID"
              required
            />
          </div>

          <hr />
          <div className="form-row">
            <div class="form-group col-md-6 col-12">
              <label for="memName2">
                Member 2 Name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                class="form-control"
                id="memName2"
                name="memName2"
                value={this.state.memName2}
                placeholder="Enter 2nd member's name"
                onChange={this.handleChange}
                required
              />
            </div>
            <div class="form-group col-md-6 col-12">
              <label for="memRollNumber2">
                Member 2 Roll Number <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="number"
                class="form-control"
                id="memRollNumber2"
                onChange={this.handleChange}
                name="memRollNumber2"
                value={this.state.memRollNumber2}
                placeholder="Enter 2nd member's roll number"
                required
              />
            </div>
            <div class="form-group col-md-6 col-12 mx-auto">
              <label for="memEmailID2">
                Member 2 Email Address <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="email"
                class="form-control"
                id="memEmailID2"
                onChange={this.handleChange}
                name="memEmailID2"
                value={this.state.memEmailID2}
                placeholder="Enter 2nd member's email ID"
                required
              />
            </div>
          </div>

          <hr />
          <div className="form-row">
            <div class="form-group col-md-6 col-12">
              <label for="memName3">Member 3 Name </label>
              <input
                type="text"
                class="form-control"
                id="memName3"
                onChange={this.handleChange}
                name="memName3"
                value={this.state.memName3}
                placeholder="Enter 3rd member's name"
              />
            </div>
            <div class="form-group col-md-6 col-12">
              <label for="memRollNumber3">Member 3 Roll Number </label>
              <input
                type="number"
                class="form-control"
                id="memRollNumber3"
                onChange={this.handleChange}
                name="memRollNumber3"
                value={this.state.memRollNumber3}
                placeholder="Enter 3rd member's roll number"
              />
            </div>
            <div class="form-group col-md-6 col-12 mx-auto">
              <label for="memEmailID3">Member 3 Email Address </label>
              <input
                type="email"
                class="form-control"
                id="memEmailID3"
                onChange={this.handleChange}
                name="memEmailID3"
                value={this.state.memEmailID3}
                placeholder="Enter 3rd member's email ID"
              />
            </div>
          </div>

          <hr />
          <div className="form-row">
            <div class="form-group col-md-6 col-12">
              <label for="memName4">Member 4 Name </label>
              <input
                type="text"
                class="form-control"
                id="memName4"
                onChange={this.handleChange}
                name="memName4"
                value={this.state.memName4}
                placeholder="Enter 4th member's name"
              />
            </div>
            <div class="form-group col-md-6 col-12">
              <label for="memRollNumber4">Member 4 Roll Number </label>
              <input
                type="number"
                class="form-control"
                id="memRollNumber4"
                onChange={this.handleChange}
                name="memRollNumber4"
                value={this.state.memRollNumber4}
                placeholder="Enter 4th member's roll number"
              />
            </div>
            <div class="form-group col-md-6 col-12 mx-auto">
              <label for="memEmailID4">Member 4 Email Address </label>
              <input
                type="email"
                class="form-control"
                id="memEmailID4"
                onChange={this.handleChange}
                name="memEmailID4"
                value={this.state.memEmailID4}
                placeholder="Enter 4th member's email ID"
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn text-center offset-0 col-12 col-md-3 mx-auto shadow-sm p-1  rounded"
            style={{
              backgroundColor: "rgba(238, 144, 159, 0.904)",
              color: "rgb(255, 241, 253)",
            }}
          >
            Save and Proceed
          </button>

          {this.state.submissionSuccessful ? (
            <Redirect to="/project-registration" />
          ) : (
            // localStorage.removeItem("groupRegistrationForm")
            <></>
          )}
        </Form>

        {/* FORM ENDS HERE */}
      </div>
    );
  }
}
export default GroupRegistrationForm;
