import React, { Component } from 'react';
class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 2,
  }

  handleInputChanged = (event) => {
    const number = event.target.value;
    this.setState({ 
      numberOfEvents: number,
    });
    this.props.updateEventCount(event.target.value);
  };
  render() {
    return (
      <div>
        <p>Limit search results </p><input type="number" id="numberInput" value={this.state.numberOfEvents} className="numberInput" onChange={(e) => this.handleInputChanged(e)} />
      </div>
    );
  }
}
export default NumberOfEvents;