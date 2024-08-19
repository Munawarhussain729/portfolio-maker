import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AssignmentList.scss";
class AssignmentList extends Component {
  render() {
    return (
      <div className="assignment-list col-xl-6 p-md-3 py-3 m-auto">
        <Link to="/assignment-details/:id">
          <div
            class="card assignment-list-container shadow-sm"
            style={{ width: "auto", border: "none" }}
          >
            <div
              className="card-header assignment-list-container-title"
              style={{ borderBottom: "0.1em solid pink" }}
            >
              <p
                style={{
                  fontSize: "1em",
                  fontWeight: "700",
                  color: "#454344"
                }}
                class="card-title text-justify my-auto"
              >
                Assignment Name
              </p>
            </div>
            <div class="card-body col-12 card-text text-muted text-left">
              <div className="" style={{ fontSize: "0.8em" }}>
                <div className="row">
                  <div className="col-6">
                    {" "}
                    <b>Posted On:</b>
                  </div>
                  <div className="col-6 text-right">15/6/2020</div>
                </div>
                <div className="row">
                  <div className="col-6">
                    {" "}
                    <b>Submission Status:</b>
                  </div>
                  <div className="col-6 text-right">Not submitted</div>
                </div>
                <div className="row">
                  <div className="col-6">
                    {" "}
                    <b>Weightage:</b>
                  </div>
                  <div className="col-6 text-right">25</div>
                </div>
                <div className="row">
                  <div className="col-6">
                    {" "}
                    <b>Posted On:</b>
                  </div>
                  <div className="col-6 text-right">23/6/2020</div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default AssignmentList;
