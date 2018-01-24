import React from "react";
import harryImg from "../../public/harry.png";
import styles from "./style";

export class Harry extends React.Component {
  render() {
    return (
      <div>
        <img className="harry__img" src={harryImg} alt="Harry Potter image" />
      </div>
    );
  }
}
