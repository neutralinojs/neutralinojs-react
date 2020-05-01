import React, { Component } from "react";

class NeuDefault extends Component {
  render() {
    if (typeof Neutralino === "undefined") {
      return "";
    }
    return (
      <h3>
        {`${NL_NAME} is running on port ${NL_PORT} inside ${NL_OS}`} <br />
        <br />
        <span> {`v ${NL_VERSION}`} </span>
      </h3>
    );
  }
}
export default NeuDefault;
