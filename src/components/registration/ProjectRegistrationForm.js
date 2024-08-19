import React from "react";
import { Form } from "react-bootstrap";
import { Redirect } from 'react-router-dom';
import './ProjectRegistrationForm.css';
class RegistrationForm extends React.Component {

  constructor(){
    super();
    this.state = JSON.parse(localStorage.getItem("projectRegistrationForm")) ||{}
  }

  handleChange = e => {
    console.log(e.target.value);
    
    this.setState({
      [e.target.name]:e.target.value
    });

  };
  handleSubmit = (e) =>{
    e.preventDefault();
    localStorage.setItem("projectRegistrationForm" , JSON.stringify(this.state));
    this.setState({successfulSubmission:true});
  }
  handlePrevClick = () =>{
    localStorage.setItem("projectRegistrationForm" , JSON.stringify(this.state));
    this.setState({prevPagePermit : true});
  }
  
  render() {
    return (
      <div
        className="container-fluid shadow-sm p-1"
        style={{ minHeight: "200vh", marginTop: "8em" }}
      >
        <p className = "lead font-weight-bold"> Registration form</p>

{/* -------------------------------------------------------- */}
{/* FORM STARTS HERE  */}

        <Form className = "col-md-8 col-12 mx-auto" onSubmit = {this.handleSubmit}>

{/* ---------------------------------------------------------- */}
{/*  Project Details */}          
          <p
          className="text-center offset-0 col-12 shadow p-1  rounded"              
          style={{
            backgroundColor: "rgba(238, 144, 159, 0.904)",
            color: "rgb(255, 241, 253)"
          }}
          >Project Details</p>

          <div class="form-group">
            <label for="projName">Project Name  <span style={{color:'red'}}>*</span></label>
            <input
              type="text"
              class="form-control"
              id="projName"
              name = "projName"
              onChange = {this.handleChange}
              value = {this.state.projName}
              placeholder="Enter project name here"
              required
            />
          </div> 

        <div class = "form-row">
          <div class="form-group col-md-6 col-12">
            <label for="projectType">Select type of project  
             <span style={{color:'red'}}> *</span>
            </label>
            <select 
            class="form-control" 
            id="projectType" 
            name = "projectType"
            onChange = {this.handleChange}
            value = {this.state.projectType} 
            required>
              <option>Internal</option>
              <option>External</option>
              <option>Inter-disciplinary</option>
            </select>
          </div>

          <div class="form-group col-md-6 col-12">
            <label for="domain">Select domain of project  
             <span style={{color:'red'}}> *</span>
            </label>
            <select 
            class="form-control" 
            id="domain"
            name = "domain"
            onChange = {this.handleChange} 
            value = {this.state.domain}
            required>
              <option>Artificial Intelligence</option>
              <option>Cloud Computing</option>
              <option>Cyber Security</option>
            </select>
          </div>

        </div>
          <div class="form-group">
            <label for="description">Enter a detailed description of the project
            <span style={{color:'red'}}> *</span>
            </label>
            <textarea 
            class="form-control" 
            id="description"
            name = "description"
            onChange = {this.handleChange}
            value = {this.state.description} 
            rows="7" 
            placeholder="Describe your project here ..." 
            required  >

            </textarea>
          </div>

          <div class="form-group p-1 text-center">
            <p>Upload reference documents <em>( if any )</em> </p>
              <label htmlFor="uploadFiles">
                <button type="button" 
                className="btn text-center offset-0 col-12 shadow-sm p-1  rounded"              
                style={{
                  backgroundColor: "rgba(238, 144, 159, 0.904)",
                  color: "rgb(255, 241, 253)"
                }}               
                >
                  {" "}
                  Upload files
                </button>
              </label>
              <input
                type="file"
                class="form-control-file d-none m-1"
                id="uploadFiles"
                name = "uploadFiles"
              />

          </div>

        <div className = "row mx-auto">          
                <div className="col-md-6 ">
                  
                  <button type="button" 
                  className="btn text-center offset-0 col-12 shadow-sm p-1  rounded"              
                  style={{
                    backgroundColor: "rgba(238, 144, 159, 0.904)", 
                    color: "rgb(255, 241, 253)"
                  }}
                  onClick = {this.handlePrevClick}
                  >
                  Go to previous page
                  </button>
                  {this.state.prevPagePermit && <Redirect to = '/group-registration' />}
                </div>

                <div className="col-md-6 p-2 ">
                    
                      <button type="Submit" 
                        className="btn text-center offset-0 col-12 shadow-sm p-1  rounded"
                                      
                        style={{
                          backgroundColor: "rgba(238, 144, 159, 0.904)",
                          color: "rgb(255, 241, 253)"
                        }}
                        
                        >
                        Submit Form
                      </button>
                      {this.state.successfulSubmission && <Redirect to = '/waiting-page' />}
                </div>               
        </div>
        
        </Form>

{/* FORM ENDS HERE */}
      </div>
    );
  }
}
export default RegistrationForm;
