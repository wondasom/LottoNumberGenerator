import React from "react";

import "./styles.css";
import Lotto from "./Lotto";
import EuroJackPot from "./EuroJackPot";

class App extends React.Component {
  state = {
    lotto: true,
    eurojackpot: false
  };

  toggle = () => {
    this.setState(state => ({ lotto: !state.lotto }));
    this.setState(state => ({ eurojackpot: !state.eurojackpot }));
  };

  render() {
    return (
      <div className="App">
        {/* <button className="toggleBtn" onClick={this.toggle}>
          
        </button> */}
        <input type="checkbox" onChange={this.toggle} />
        {this.state.lotto && <Lotto />}
        {this.state.eurojackpot && <EuroJackPot />}
      </div>
    );
  }
}

export default App;
