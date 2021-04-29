import React, { Component } from "react";
import './EventAdd.css';

class EventAdd extends Component {
 
  state = {
    form: { name: "", event: "", important: "", isEdit: false },
    btnName: "Save",
   
  };

  isEmptyObj(obj) {
    return Object.entries(obj).length === 0 && obj.constructor === Object;
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props  && !this.isEmptyObj(this.props.event)) {
      this.setState({
        form: { ...this.props.event, isEdit: true },
        btnName: "Update",
        
      });
      // console.log("update");
    }
  }

  onFormSubmit = eventt => {
    // prevent form submit
    eventt.preventDefault();
// form validation
if (this.formValidation()) {
  // send form data to app
  this.props.onFormSubmit(this.state.form);

  // change the button to save
  this.setState({
    btnName: "Save",
    btnClass: "ui primary button submit-button"
  });

  // clear form fields
  this.clearFormFields();
}
};

handleChange = eventt => {
  const { name, value } = eventt.target;
  let form = this.state.form;
  form[name] = value;
  this.setState({ form });
};

formValidation = () => {
  //  name
  if (document.getElementsByName("name")[0].value === "") {
    alert("Enter  name");
    return false;
  }

  // event name
  if (document.getElementsByName("event")[0].value === "") {
    alert("Enter event");
    return false;
  }

  // important
  if (document.getElementsByName("important")[0].value === "") {
    alert("Enter important");
    return false;
  }

  return true;
};


clearFormFields = () => {
  // console.log("clear");
  // change form state
  this.setState({
    form: { name: "", event: "", important: "", isEdit: false }
  });

  // clear form field
   document.querySelector(".form").value = ""; 
  //document.querySelector(".form").reset();
};


  render() {
    return (
      <div className="form">
      <form >
          <table>
              <thead></thead>
              <tbody>
                  
                  <tr>
                      <td>Name</td>
                      <td>
                          <input type="text" name="name" onChange={this.handleChange} value={this.state.form.name}/> 
                      </td>
                  </tr>
                  <tr>
                      <td>Event</td>
                      <td>
                          <textarea type="text" name="event" rows = "10" cols = "30" onChange={this.handleChange} value={this.state.form.event} /> 
                      </td>
                  </tr>
                  <tr>
                      <td>Importent</td>
                      <td>
                          <input type="text" name="important" onChange={this.handleChange} value={this.state.form.important}/> 
                      </td>
                  </tr>
                  
                  <tr>
                      <td></td>
                      <td>
                      <button className={this.state.btnClass} onClick={this.onFormSubmit}>{this.state.btnName}</button>
                      </td>
                  </tr>
              </tbody>
          </table>
      </form>
  </div>
    );
  }
}

export default EventAdd;