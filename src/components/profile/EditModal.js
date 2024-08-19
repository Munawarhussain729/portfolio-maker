import React from "react";
import "./EditModal.css";

class EditModal extends React.Component {
  constructor() {
    super();
    this.state = {
      showError: false,
      showForm: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.displayError = this.displayError.bind(this);
  }

  displayError = () => {
    this.setState({ showError: true });
  };

  handleSubmit = e => {
    e.preventDefault();
    let password1 = e.target[0].value;
    let password2 = e.target[1].value;

    if (password1 !== password2) {
      this.displayError();
    } else {
      this.setState({ showForm: false });
    }
  };

  render() {
    return (
      <div>
        {this.state.showForm && (
          <form className="p-3" onSubmit={this.handleSubmit}>
            <div class="form-group">
              <label for="password1" className="font-weight-bold">
                Enter new Password
              </label>
              <input
                type="password"
                class="form-control m-1"
                id="password1"
                placeholder="Enter the new password"
              />

              <label for="password2" className="font-weight-bold">
                Confirm new Password
              </label>
              <input
                type="password"
                class="form-control m-1"
                id="password2"
                placeholder="Re-enter the password"
              />

              {this.state.showError && (
                <div>
                  <p className="text-center text-danger font-italic">
                    Passwords do not match!
                  </p>
                </div>
              )}
            </div>
            <div class="form-group p-1 text-center">
              <label htmlFor="editProfilePicture">
                <button type="button" className="btn shadow-sm">
                  {" "}
                  Upload Profile Picture
                </button>
              </label>
              <input
                type="file"
                class="form-control-file d-none m-1"
                id="editProfilePicture"
              />
            </div>
            <button type="submit" class="btn shadow-sm">
              Submit
            </button>
          </form>
        )}
      </div>
    );
  }
}
export default EditModal;
