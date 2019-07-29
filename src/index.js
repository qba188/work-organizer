import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calendar from 'react-calendar';
import Clock from 'react-clock';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';

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
ReactDOM.render(<DateTime />, document.getElementById('root'));

