import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <span>
            <i className="fa fa-heart mr-2 fa-fw"></i>
            Project Portal
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;
