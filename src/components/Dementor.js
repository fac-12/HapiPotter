import React from "react";
import dementorImg from "../../public/dementor.png";

export class Dementor extends React.Component {
  // componentDidMount() {}
  render() {
    return (
      <div>
        <img src={dementorImg} alt="Dementor image" />
      </div>
    );
  }
}
