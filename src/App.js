import React, { Component } from "react";

class reactComponents extends Component {
  state = {
    aMemVal: "",
    tMemVal: "",
    spanStyles: {
      margin: 10
    },
    isbtnRamUsage: 0,
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
          onClick={() => {
            this.ramUsage();
            this.isRamBtnClicked();
          }}
        />
        {this.state.isbtnRamUsage === 1 ? (
          <p id="ram">
            Available Memory :
            <span id="aMem" style={this.state.spanStyles}>
              {this.state.aMemVal}
            </span>
            Total Memory :
            <span id="tMem" style={this.state.spanStyles}>
              {this.state.tMemVal}
            </span>
          </p>
        ) : (
          ""
        )}
      </div>
    );
  }
  ramUsage() {
    Neutralino.computer.getRamUsage(
      function(data) {
        let aMem =
          (data["ram"]["available"] / (1024 * 1024)).toFixed(3) + " GB";
        this.setState({ aMemVal: aMem });

        let tMem = (data["ram"]["total"] / (1024 * 1024)).toFixed(3) + " GB";
        this.setState({ tMemVal: tMem });
      }.bind(this),
      function() {
        this.setState({ aMemVal: "Error While Executing" });
      }.bind(this)
    );
  }

  isRamBtnClicked = () => {
    this.setState({ isbtnRamUsage: 1 });
  };
}

export default reactComponents;
