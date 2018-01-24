import React from "react";
import dementorImg from "../../public/dementor.png";
import styles from "./style";

export class Dementor extends React.Component {
  // componentDidMount() {}
  render() {
    return (
      <div>
        <img className="dementor__img" src={dementorImg} alt="Dementor image" />
      </div>
    );
  }
}
