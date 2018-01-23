import React from "react";

export class Button extends React.Component {
  state = {
    health: 100,
    interval: null
  };

  healthDecrement = () => {
    if (this.state.health > 0) {
      const interval = setInterval(() => {
        this.setState({ health: this.state.health - 10 });
      }, 1000);
      this.setState({ interval });
    }
    stop();
  };

  healthIncrement = () => {
    this.setState({ health: this.state.health + 1 });
  };

  stop = () => {
    clearInterval(this.state.interval);
    this.setState({ health: 100 });
  };

  render() {
    return (
      <div>
        <p>{this.state.health}</p>
        <button onClick={this.healthDecrement}>Start</button>
        <button onClick={this.healthIncrement}>Add health</button>
        <button onClick={this.stop}>Stop</button>
      </div>
    );
  }
}
