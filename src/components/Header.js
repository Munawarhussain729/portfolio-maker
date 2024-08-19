import React, { Component } from "react";
import "./Header.css";
// import user from "../resources/user.png";
import user from "../resources/user.jpeg";
import book from "../resources/book.png";
import { Link } from "react-router-dom";
import Profile from "./profile/Profile";
import $ from "jquery";
import EditModal from "./profile/EditModal";

class Header extends Component {
  ProfileModalRef = ({ handleShow }) => {
    this.showModal = handleShow;
  };

  onProfileClick = () => {
    this.showModal();
  };

  componentDidMount() {
    let prevScrollpos = window.pageYOffset;
    let navHeight = $(".navbar").height();
    // $("#notificationContainer").css({ top: `${navHeight}` });
    window.onscroll = function() {
      let currentScrollPos = window.pageYOffset;
      if (currentScrollPos > navHeight * (1 / 3)) {
        if (prevScrollpos > currentScrollPos) {
          // $(".navbar").fadeIn(500);
          $(".navbar").slideDown(500);
          $("#notificationContainer").css({ transform: "translateY(0em)" });
        } else if (
          !$(".navbar").is(":hover") &&
          !$("#dropdownMenu").is(":hover")
        ) {
          // $(".navbar").fadeOut(500);
          $(".navbar").slideUp(500);
          $("#notificationContainer").css({ transform: "translateY(-3em)" });
          $("#dropdownMenu").removeClass("show");
        }
      }
      prevScrollpos = currentScrollPos;
    };
  }

  render() {
    return (
      <header>
        <Profile ref={this.ProfileModalRef} />
        <div
          className="navbar shadow-sm"
          style={{ backgroundColor: "#fff5ee" }}
        >
          <div className="container col-12 col-md-10 mx-auto">
            <div className="navbar-brand">
              <Link to="/">
                {" "}
                <img src={book} alt="Portal" width={50} />
              </Link>
            </div>
            <ul className="nav">
              <li className="nav-item">
                <div className="dropdown">
                  <img
                    src={user}
                    alt="profile"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    width={50}
                    height={50}
                    className="rounded-circle"
                    style={{ cursor: "pointer" }}
                  />
                  <div
                    class="dropdown-menu dropdown-menu-right shadow"
                    id="dropdownMenu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <Link
                      class="dropdown-item d-block d-md-none"
                      to="/notifications"
                    >
                      <i className="fa fa-fw mr-2 fa-bell fa-sm" />
                      Notifications
                    </Link>
                    <Link class="dropdown-item" to="/">
                      <i className="fa fa-fw mr-2 fa-book fa-sm" />
                      My assignments
                    </Link>
                    <Link class="dropdown-item" to="/grades">
                      <i className="fa fa-fw mr-2 fa-mortar-board fa-sm" />
                      My grades
                    </Link>
                    <Link class="dropdown-item" to="/group-registration">
                      <i className="fa fa-fw mr-2 fa-child fa-sm" />
                      Group Registration
                    </Link>
                    <button onClick={this.onProfileClick} class="dropdown-item">
                      <i className="fa fa-fw mr-2 fa-user fa-sm" />
                      Profile
                    </button>
                    <button onClick={this.onProfileClick} class="dropdown-item">
                      <i className="fa fa-fw mr-2 fa-cog fa-sm" />
                      Change password
                    </button>
                    <Link class="dropdown-item" to="/logout">
                      <i className="fa fa-fw mr-2 fa-lock fa-sm" />
                      Log out
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
