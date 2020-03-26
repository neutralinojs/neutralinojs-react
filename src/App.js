import React, { Component } from "react";

class reactComponents extends Component {
  state = {
    spanStyles: {
      margin: 10
    },
    pStyles: {
      visibility: "hidden"
    },
    btnRamUsage: {
      color: " #fff",
      backgroundColor: "#28a745",
      borderColor: "#28a745",
      borderRadius: "0.25rem",
      fontWeight: 400,
      textAlign: "center",
      border: "1px solid transparent",
      padding: ".375rem .75rem",
      fontSize: " 1rem",
      lineHeight: "1.5",
      cursor: "pointer"
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
          style={this.state.btnRamUsage}
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
