import React, { useState } from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isON: true }
  }

  handleClick() {
    this.setState({ isON: !this.state.isON });
  }

  render() {
    const { isON } = this.state;
    let isActive = isON ? 'ON' : 'OFF';
    return (
      <button onClick={this.handleClick}>{isActive}</button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);