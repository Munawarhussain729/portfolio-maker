import React from "react";

class WaitingPage extends React.Component {
  render() {
    return (
      <div
        className="container-fluid shadow-sm p-1"
        style={{ minHeight: "200vh", marginTop: "8em" }}
      >
        <p class="lead">Hold on till your project gets approved!!</p>
      </div>
    );
  }
}
export default WaitingPage;
