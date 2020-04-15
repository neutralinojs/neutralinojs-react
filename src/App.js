import React, { Component } from "react";
import RamUsageExample from "./RamUsageExample ";

class reactComponents extends Component {
  state = {
    aMemVal: "",
    tMemVal: "",
  };
  render() {
    return (
      <div>
        <h3>
          {NL_NAME} is running on port {NL_PORT} inside {NL_OS} <br />
          <br />
          <span>v {NL_VERSION} </span>
        </h3>
        <div id="ramUsage"></div>
        {}
        {/* NeutralinoJs example for get current available and total ram in Gb*
        remove comment for below line*/}
        {/* <RamUsageExample/> */}
      </div>
    );
  }
}

export default reactComponents;
