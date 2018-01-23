import React from "react";

export class Button extends React.Component {
  state = {
    running: false,
    health: 100
  };

  healthDecrement = () => {
    this.setState({ running: true });
    if (this.state.health >= 0) {
      setInterval(() => {
        this.setState({ health: this.state.health - 10 });
      }, 1000);
    }
  };

  healthIncrement = () => {
    this.setState({ health: this.state.health + 1 });
  };

  render() {
    return (
      <div>
        <p>{this.state.health}</p>
        <button onClick={this.healthDecrement}>Start</button>
        <button onClick={this.healthIncrement}>Add health</button>
      </div>
    );
  }
}
