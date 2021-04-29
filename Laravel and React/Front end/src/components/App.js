import React, { Component } from "react";
import axios from "axios";
import ReactDom from "react-dom";
import EventAdd from "./EventAdd";
import EventList from "./EventList";
import "./App.css";

class App extends Component {
 
    state = {
        events: [],
        event: {},
        url: "http://127.0.0.1:8000/api/Diary",
        url2: "http://127.0.0.1:8000/api/Diary/add",
      
      };
    
      getEvents = async () => {
        const events = await axios.get(this.state.url);
        this.setState({ events: events.data });
      };

      deleteEvent = async id => {
    
       /*  await axios.delete(`${this.state.url2}/${id}`) */
        axios.delete(`http://127.0.0.1:8000/api/Diary/${id}`)
    
        this.getEvents();
      };

      createEvent = async data => {
        this.setState();
    
        await axios
          .post(this.state.url2, {
           name: data.name,
            event: data.event,
            important: data.important
          })
    
        this.getEvents();
      };


      editEvent = async data => {
        // clear event obj
        this.setState({ event: {} });
    
        await axios
          .put(`http://127.0.0.1:8000/api/Diary/update/${data.id}`, {
           name: data.name,
            event: data.event,
            important: data.important
          })
          .catch(e => {
            console.log(e.message);
          });
    
        this.getEvents();
      };


    
     /*  editEvent = async data => {
        // clear event obj
        this.setState({ event: {} });
    
        await axios
          .put(`${this.state.url3}/${data.id}`, {
           name: data.name,
            event: data.event,
            important: data.important
          })
          .catch(e => {
            console.log(e.message);
          });
    
        this.getEvents();
      };

 */
 
      componentDidMount() {
        this.getEvents();
      }
    
      onDelete = id => {
         console.log("app ", id);
        this.deleteEvent(id);
      };
    
      onEdit = data => {
        // console.log("app ", data);
        this.setState({ event: data });
      };
    
      onFormSubmit = data => {
       
        // console.log("app ", data);
        if (data.isEdit) {

            console.log("app ", data);
          // if is edit true
          this.editEvent(data);
        } else {
          // if is edit false
          this.createEvent(data);
        }
      };

      render() {
        return (
          <div>
            <div >
              <div >
                <h1>
                  Online Diary
                </h1>
              </div>
            </div>
    
            <div>
              <EventAdd
                onFormSubmit={this.onFormSubmit}
                event={this.state.event}
              />
              <EventList
                events={this.state.events}
                onDelete={this.onDelete}
                onEdit={this.onEdit}
              />
            </div>
          </div>
        );
      }
    }

  
export default App;