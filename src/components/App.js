import React from "react";
import { Dementor } from "./Dementor";
import { Harry } from "./Harry";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Dementor />
        <Harry />
      </div>
    );
  }
}
