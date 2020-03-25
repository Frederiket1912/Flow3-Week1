import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TimeTeller />
    </div>
  );
}

class TimeTeller extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date().toLocaleTimeString() };
  }

  updateTime = () => {
    this.setState({ time: new Date().toLocaleTimeString() });
  };

  render() {
    return (
      <div>
        <h3>The time is : {this.state.time}</h3>
        <button onClick={this.updateTime}>Update Time</button>
      </div>
    );
  }
}

export default App;
