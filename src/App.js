import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { getEvents, extractLocations } from './api';
import { InfoAlert, ErrorAlert } from "./Alert";
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    currentLocation: "all",
    locations: [],
    numberOfEvents: 12,
    errorText: "",
    infoText: ""
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }
  componentWillUnmount(){
    this.mounted = false;
  }
  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      const { numberOfEvents } = this.state;
      this.setState({
        events: locationEvents.slice(0, numberOfEvents)
      });
    });
  }

  updateEventCount = async (e) => {
    const newVal = e.target.value ? parseInt(e.target.value) : 12;

    if (newVal < 1 || newVal > 12) {
      await this.setState({
        errorText: "Please choose a number between 1 and 12",
      });
    } else {
      await this.setState({
        errorText: "",
        numberOfEvents: newVal,
      });
      this.updateEvents(this.state.currentLocation, this.state.numberOfEvents);
    }
  };


  render() {
    const { locations, events, numberOfEvents } = this.state;
    return (
      <Container className="App">
        <Row>
          <Col className="CitySearchWrapper" md={6}>
            <CitySearch locations={locations} updateEvents={this.updateEvents} />
          </Col>
          <Col className="NumberInputWrapper" md={6}>
            <NumberOfEvents 
            numberOfEvents={numberOfEvents} 
            updateEventCount={this.updateEventCount} 
            errorText={this.state.errorText}/>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <EventList events={events} />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default App;