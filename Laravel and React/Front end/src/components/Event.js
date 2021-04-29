import React, { Component } from "react";

class Event extends Component {
  onDelete = () => {
    // console.log('event ', this.props.event.id);
    this.props.onDelete(this.props.event.id);
  };

  onEdit = () => {
    // console.log('event ', this.props.event.id);
    this.props.onEdit(this.props.event);
  };

  render() {
    const { id, name, event, important } = this.props.event;
    return (
      <tr>
        <td style={{ textAlign: "center" }}>{id}</td>
        <td>{name}</td>
        <td>{event}</td>
        <td>{important}</td>
        <td>
          <button className="mini ui blue button" onClick={this.onEdit}>
            Edit
          </button>
          <button className="mini ui red button" onClick={this.onDelete}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Event;