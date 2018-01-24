import React from "react";
import styles from "./style";

export class Button extends React.Component {
  state = {
    health: 100,
    message: null
  };
  healthDecrement = () => {
    this.countdown = setInterval(() => {
      this.setState(props => {
        if (this.state.health > 100) {
          clearInterval(this.countdown);
          console.log("more than 100");
        } else if (this.state.health < 0) {
          clearInterval(this.countdown);
          console.log("ded");
        } else {
          return { health: this.state.health - 1 };
        }
      });
    }, 50);
  };

  healthIncrement = () => {
    this.setState({ health: this.state.health + 2 });
  };

  restart = () => {
    this.setState({ health: 100 });
  };
  render() {
    return (
      <div className="button__container">
        <div>
          <button onClick={this.healthDecrement}>Start Fight</button>
          <button onClick={this.healthIncrement}>Expecto patronum</button>
          <button onClick={this.restart}>Respawn</button>
        </div>
        <div className="soulbar">
          <div
            className="soulbar__level"
            style={{ width: `${this.state.health}%` }}
          />
        </div>
      </div>
    );
  }
}
