import React, { Component } from "react";
// import user from "../resources/user.png";
import user from "../../resources/user.jpeg";
//import "./Profile.scss";
import { Modal } from "react-bootstrap";
import EditModal from "./EditModal";
//import $ from "jquery";

class Profile extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.showEditModal = this.showEditModal.bind(this);
    this.state = {
      show: false,
      showEditModal: false,
    };
  }
  showEditModal() {
    this.setState({ showEditModal: !this.state.showEditModal });
  }
  handleShow() {
    console.log(this.state);
    this.setState({ show: true });
  }
  handleClose() {
    this.setState({ show: false });
  }
  /*componentDidMount() {
    $("#student-image").click(function() {
      $("#imgupload").trigger("click");
    });
  }*/

  render() {
    return (
      <div>
        <Modal
          backdrop
          size="md"
          style={{ marginTop: "" }}
          fade="true"
          centered
          show={this.state.show}
          onHide={this.handleClose}
        >
          <Modal.Header
            closeButton
            id="modal-header-profile"
            // style={{ background: "radial-gradient(#fff5ee, white)" }}
            style={{
              //back
              borderBottom: "0.1em solid rgba(238, 144, 159, 0.904)",
            }}
          >
            <Modal.Title className="text-center col-md-10 offset-1">
              <label for="image">
                <input type="file" id="imgupload" style={{ display: "none" }} />
                {/*$('#imgupload').trigger('click');*/}
                <button className="btn" onclick="imgupload.click();">
                  <img
                    src={user}
                    style={{ marginTop: "" }}
                    alt="Student"
                    id="student-image"
                    width={100}
                    height={100}
                    className="rounded-circle"
                  />
                </button>
              </label>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p
              className="text-center offset-0 col-12 shadow p-1 rounded"
              style={{
                backgroundColor: "rgba(238, 144, 159, 0.904)",
                color: "rgb(255, 241, 253)",
              }}
            >
              <i className="fa fa-user fa-fw mr-2" />
              Student Details
            </p>

            <div className="col-12 offset-0">
              <p className="row overflow-auto">
                <b className="col-6">Name:</b>
                <div className="col-6"> Student User</div>
              </p>
              <p className="row overflow-auto">
                <b className="col-6">Semester:</b>
                <div className="col-6"> 7</div>
              </p>
              <p className="row overflow-auto">
                <b className="col-6">Roll number:</b>
                <div className="col-6"> 18140xx</div>
              </p>
              <p className="row overflow-auto">
                <b className="col-6">Email id :</b>
                <div className="col-6"> sample@somaiya.edu</div>
              </p>
            </div>
            <p
              className="text-center col-12 offset-0 shadow p-1 rounded"
              style={{
                backgroundColor: "rgba(238, 144, 159, 0.904)",
                color: "rgb(255, 241, 253)",
              }}
            >
              <i className="fa fa-group fa-fw mr-2" />
              Group Details
            </p>

            <div className="col-12 offset-0">
              <p className="row overflow-auto">
                <b className="col-6">Group no:</b>
                <div className="col-6"> 3</div>
              </p>
              <p className="row overflow-auto">
                <b className="col-6">Project:</b>
                <div className="col-6"> Project name here</div>
              </p>
              <p className="row overflow-auto">
                <b className="col-6">Department:</b>
                <div className="col-6"> Department name here</div>
              </p>
              <p className="row overflow-auto">
                <b className="col-6">Guide:</b>
                <div className="col-6"> Guide name here</div>
              </p>
            </div>

            <div className="text-center my-3">
              <button
                type="button"
                id="edit-profile"
                className="btn text-white"
                style={{
                  background: " rgba(238, 144, 159, 0.904)",
                  outline: "none",
                  boxShadow: "none",
                }}
                onClick={this.showEditModal}
              >
                <i className="fa fa-gear fa-fw mr-2" />
                Edit Profile
              </button>
            </div>

            <div className="edit-modal text-center p-2 ">
              {this.state.showEditModal && <EditModal />}
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Profile;
