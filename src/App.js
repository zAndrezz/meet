import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import { InfoAlert, ErrorAlert } from "./Alert";
import WelcomeScreen from './WelcomeScreen';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import EventGenre from './EventGenre';
import './nprogress.css';
import mockData from './mock-data'

class App extends Component {
  state = {
    events: [],
    currentLocation: "all",
    locations: [],
    numberOfEvents: 12,
    showWelcomeScreen: undefined,
    
  }
  async componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }
  componentWillUnmount() {
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
  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };
  render() {
    const { locations, events, numberOfEvents } = this.state;
    if (this.state.showWelcomeScreen === undefined);
    return (
      <Container className="App">
        <Row>
          <Col className="CitySearchWrapper" md={12}>
            <CitySearch locations={locations} updateEvents={this.updateEvents} />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
        <EventGenre events={this.state.events} />
        </Col>
          <Col sm={12} md={8}>
            <ResponsiveContainer height={300} width={800} >
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 5 }}>
                <CartesianGrid />
                <XAxis type="category" dataKey="city" name="city" />
                <YAxis
                  allowDecimals={false}
                  type="number"
                  dataKey="number"
                  name="number of events"
                />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                <Scatter data={this.getData()} fill="#8884d8" />
              </ScatterChart>
            </ResponsiveContainer>
          </Col>
        </Row>
        <Row>
          <Col className="NumberInputWrapper" sm={12} md={12}>
            <NumberOfEvents
              numberOfEvents={numberOfEvents}
              updateEventCount={this.updateEventCount}
              errorText={this.state.errorText} />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <EventList events={events} />
          </Col>
        </Row>
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} />
      </Container>
    );
  }
}
export default App;