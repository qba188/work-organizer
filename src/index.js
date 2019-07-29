import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calendar from 'react-calendar';
import Clock from 'react-clock';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, DropdownButton, Dropdown} from 'react-bootstrap';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class MyCalendar extends React.Component {
    state = {
      date: new Date(),
    }
  
    onChange = date => this.setState({ date })
  
    render() {
      return (
        <div>
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
          />
        </div>
      );
    }
}

class MyClock extends React.Component {
    state = {
      date: new Date(),
    }
  
    componentDidMount() {
      setInterval(
        () => this.setState({ date: new Date() }),
        1000
      );
    }
  
    render() {
      return (
        <div>
          <Clock
            value={this.state.date}
          />
        </div>
      );
    }
}

class DateTime extends MyClock {

    render() {
      return (
        <div>
        <Container>
            <Row>
                <Col><MyCalendar/></Col>
                <Col><MyClock/></Col>
            </Row>
        </Container>
        </div>
      );
    }
}

class MainDataPicker extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        startDate: new Date()
      };
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(date) {
      this.setState({
        startDate: date
      });
    }
  
    render() {
      return (
       <div>
         <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            showTimeSelect
            timeFormat="H:MM"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy H:MM"
            timeCaption="time"
        />
       </div> 
      );
    }
}

class MainPerson extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        person : "Imię, nazwisko"
      };
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({
          person: event.target.value,
      })
  }
  
    render() {
      return (
       <div>
         <input value={this.state.person} onChange={this.handleChange}></input>
       </div> 
      );
    }
}

class MainTask extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        task : "Zadanie"
      };
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({
          task: event.target.value,
      })
  }
  
    render() {
      return (
       <div>
         <textarea value={this.state.task} onChange={this.handleChange}></textarea>
       </div> 
      );
    }
}

class DropdownB extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        low : "low",
        medium : "medium",
        high : "high"
      }
    };

    render() {
      return (
       <div>
        <DropdownButton id="dropdown-basic-button" title="Priorytet">
          <Dropdown.Item value={this.state.low}>Niski</Dropdown.Item>
          <Dropdown.Item value={this.state.medium}>Średni</Dropdown.Item>
          <Dropdown.Item value={this.state.high}>Wysoki</Dropdown.Item>
        </DropdownButton>
       </div> 
      );
    }
}
ReactDOM.render(<MainTask />, document.getElementById('root'));

