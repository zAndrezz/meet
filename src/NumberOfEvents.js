import React, { Component } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import { ErrorAlert } from "./Alert";
class NumberOfEvents extends Component {
  render() {
    return (
      <div className="NumberOfEvents mt-40">
        <p>How Many Events?</p>

        <RangeSlider
          min={0}
          max={13}
          className="num-events"
          value={this.props.numberOfEvents}
          onChange={(e) => this.props.updateEventCount(e)}
        />
        <ErrorAlert text={this.props.errorText} />
      </div>
    );
  }
}
export default NumberOfEvents;