import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import WelcomeScreen from './WelcomeScreen';
import { getEvents, extractLocations, checkToken, getAccessToken } from
'./api';
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    currentLocation: "all",
    locations: [],
    numberOfEvents: 12,
    showWelcomeScreen: undefined,
    currentLocation: 'all',
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false :
    true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
this.setState({ showWelcomeScreen: !(code || isTokenValid) });
if ((code || isTokenValid) && this.mounted) {
getEvents().then((events) => {
if (this.mounted) {
this.setState({ events, locations: extractLocations(events) });
}
});
}
}
getData = () => {
  const { locations, events } = this.state;
  const data = locations.map((location) => {
    const number = events.filter((event) => event.location === location).length
    const city = location.split(', ').shift()
    return { city, number };
  })
  return data;
};

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

  updateEventCount = (eventCount) => {
    const { currentLocation } = this.state;
    this.setState({
      numberOfEvents: eventCount
    });
    this.updateEvents(currentLocation, eventCount);
  }

  render() {
    const { locations, events, numberOfEvents } = this.state;
    if (this.state.showWelcomeScreen === undefined);
    return (
      
      <Container className="App">
        <Row>
          <Col className="CitySearchWrapper" md={6}>
            <CitySearch locations={locations} updateEvents={this.updateEvents} />
          </Col>
          <Col className="NumberInputWrapper" md={6}>
            <NumberOfEvents numberOfEvents={numberOfEvents} updateEventCount={this.updateEventCount} />
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