import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { InfoAlert } from "./Alert";
import Event from "./Event";

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <Row>
        {!navigator.onLine ? (
          <InfoAlert text="You are offline! You're looking at cached data." />
        ) : (
          ""
        )}
        <Col  className="EventListWrapper">
          <ul className="EventList Row">
            {events.map((event) => (
              <li
               
                key={event.id}
              >
                <Event event={event} />
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    );
  }
}
export default EventList;