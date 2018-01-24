import React from "react";
import { Dementor } from "./Dementor";
import { Harry } from "./Harry";
import { Button, Soulbar } from "./Button";
import forest from "../../public/forest-img.jpg";
import styles from "./style";

export default class App extends React.Component {
  render() {
    return (
      <div
        className="game__container"
        style={{ backgroundImage: `url(${forest})` }}
      >
        <Harry />
        <Dementor />

        <Button />
      </div>
    );
  }
}
