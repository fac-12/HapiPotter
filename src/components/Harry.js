import React from "react";
import harryImg from "../../public/harry.png";

export class Harry extends React.Component {
  // componentDidMount() {}
  render() {
    return (
      <div>
        <img src={harryImg} alt="Harry Potter image" />
      </div>
    );
  }
}
