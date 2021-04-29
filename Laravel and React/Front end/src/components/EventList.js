import React, { Component } from "react";
import Event from "./Event";

class EventList extends Component {
  onDelete = id => {
    // console.log("event list ", id);
    this.props.onDelete(id);
  };

  onEdit = id => {
    // console.log("event list ", id);
    this.props.onEdit(id);
  };

  render() {
    const events = this.props.events;
    return (
      <div className="data">
        <table className="ui celled table">
          <thead>
            <tr>
              <th >ID</th>
              <th  style={{ width: "148px" }}>Name</th>
              <th  style={{ width: "248px" }}>Event</th>
              <th  style={{ width: "148px" }}>Important</th>
              <th  style={{ width: "148px" }}>Create Date</th>
              <th  style={{ width: "148px" }}>Updated Date</th>
              <th style={{ width: "148px" }}>Action</th>
            </tr>
          </thead>

          <tbody>
            {events.map(event => {
              return (
                <Event
                  key={event.id}
                  event={event}
                  onDelete={this.onDelete}
                  onEdit={this.onEdit}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EventList;