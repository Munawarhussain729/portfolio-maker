import React, { Component } from "react";
class Notifications extends Component {
  state = {};
  render() {
    return (
      <div className="notifications">
        <ul
          class="list-group list-group-flush rounded"
          style={{ fontSize: ".9em" }}
        >
          <li class="list-group-item text-justify">
            {" "}
            <i className="fa fa-paw fa-fw mr-2" />
            Cras justo odio
          </li>
          <li class="list-group-item text-justify">
            {" "}
            <i className="fa fa-paw fa-fw mr-2" />
            Dapibus ac facilisis in
          </li>
          <li class="list-group-item text-justify">
            {" "}
            <i className="fa fa-paw fa-fw mr-2" />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic amet
            animi velit omnis veritatis pariatur ab deleniti, molestiae quia
            voluptatem quasi eos? Rem sunt fuga molestias. Illo at voluptate
            ducimus.
          </li>{" "}
          <li class="list-group-item text-justify">
            {" "}
            <i className="fa fa-paw fa-fw mr-2" />
            Morbi leo risus
          </li>
          <li class="list-group-item text-justify">
            {" "}
            <i className="fa fa-paw fa-fw mr-2" />
            Porta ac consectetur ac
          </li>
          <li class="list-group-item text-justify">
            {" "}
            <i className="fa fa-paw fa-fw mr-2" />
            Vestibulum at eros
          </li>
        </ul>
      </div>
    );
  }
}

export default Notifications;
