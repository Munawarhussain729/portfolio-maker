import React, { Component } from "react";
import "./Container.css";
import AssignmentList from "./AssignmentList";
import Notifications from "./Notifications";

class Container extends Component {
  state = {};
  render() {
    return (
      <div className="col-md-10 col-auto mx-auto">
        <div className="row mainContainer">
          <div
            id="notificationContainer"
            className="col-12 mx-auto col-lg-4 d-none d-md-block"
          >
            <div className="title shadow rounded p-1 my-4">
              <i className="fa fa-bell fa-fw mr-1" />
              Notifications
            </div>
            <div className="content bg-white shadow-sm my-3 rounded">
              <Notifications />
            </div>
          </div>
          <div className="col-12 mx-auto col-lg-8">
            <div className="title shadow rounded p-1 my-4">
              <i className="fa fa-list fa-fw mr-1" />
              Assignments
            </div>
            <form action="/" className="row">
              <div className="input-group col-12 col-md-8 mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Assignment"
                  width=""
                />
                <div className="input-group-append">
                  <button
                    className="btn"
                    style={{
                      background: "rgba(238, 144, 159, 0.904)",
                      color: "white"
                    }}
                  >
                    <i className="fa fa-search" />
                  </button>
                </div>
              </div>
            </form>
            <div
              // className="content shadow-sm my-3 rounded p-2"
              className="content my-3 rounded p-2"
              // style={{ background: "radial-gradient(#fff5ee, white)" }}
              style={{ background: "none" }}
            >
              <div className="row px-md-4 py-md-3">
                <AssignmentList />
                <AssignmentList />
                <AssignmentList />
                <AssignmentList />
                <AssignmentList />
                <AssignmentList />
                <AssignmentList />
                <AssignmentList />
                <AssignmentList />
                <AssignmentList />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
