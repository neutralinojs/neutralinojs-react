import React, { Component } from "react";

class reactComponents extends Component {
  state = {
    spanStyles: {
      margin: 10
    },
    pStyles: {
      visibility: "hidden"
    }
  };
  render() {
    return (
      <div>
        <h2>
          {NL_NAME} sachith is running on port {NL_PORT} inside {NL_OS} <br />
          <br />
          <span>v {NL_VERSION} </span>
        </h2>
        <input
          type="button"
          className="btn btn-success m-2"
          value="Get Ram Usage"
          onClick={this.ramUsage}
        />
        <p id="ram" style={this.state.pStyles}>
          Available Memory :
          <span id="aMem" style={this.state.spanStyles}></span>
          Total Memory : <span id="tMem" style={this.state.spanStyles}></span>
        </p>
      </div>
    );
  }
  ramUsage() {
    Neutralino.computer.getRamUsage(
      function(data) {
        document.getElementById("aMem").innerHTML =
          (data["ram"]["available"] / (1024 * 1024)).toFixed(3) + " GB";
        document.getElementById("tMem").innerHTML =
          (data["ram"]["total"] / (1024 * 1024)).toFixed(3) + " GB";
      },
      function() {
        document.getElementById("aMem").innerHTML = "Error While Executing";
      }
    );
    document.getElementById("ram").style.visibility = "visible";
  }
}

export default reactComponents;
