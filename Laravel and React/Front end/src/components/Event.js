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
    const { id, name, event, important, created_at, updated_at } = this.props.event;
    return (
      <tr>
        <td style={{ textAlign: "center" }}>{id}</td>
        <td>{name}</td>
        <td>{event}</td>
        <td>{important}</td>
        <td>{created_at}</td>
        <td>{updated_at}</td>
        <td>
          <button  onClick={this.onEdit}>
            Edit
          </button>
          <button  onClick={this.onDelete}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Event;