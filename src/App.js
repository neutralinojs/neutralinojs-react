import React, { Component } from "react";

import RamUsageExample from "./Components/RamUsageExample ";
import NeuDefault from "./Components/NeuDefault";

class reactComponents extends Component {
  render() {
    return (
      <div>
        <h1 data-testid="caption">NeutralinoJs</h1>

        <div id="neuDefault">
          <NeuDefault />
        </div>
        <div id="ramUsage">
          {/* NeutralinoJs example for get current available and total ram in Gb*
        remove comment for below line*/}
          {/*   <RamUsageExample/>   */}
        </div>
      </div>
    );
  }
}

export default reactComponents;
