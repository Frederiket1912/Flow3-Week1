import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <StateDemo />
    </div>
  );
}

const redborder = {
  border: "2px solid red",
  width: "400px",
  margin: "5px"
};

const parentborder = {
  border: "2px solid green",
  width: "414px"
};

const blueborder = {
  border: "2px solid blue",
  width: "400px",
  margin: "5px"
};

const StateDemo = () => {
  const [state, setState] = useState({});
  const update = event => {
    const number = event.target.value;
    setState({ number });
  };
  // const render = () => {
  return (
    <div style={parentborder}>
      <h2>Parent componet holding the state</h2>
      <InputComp update={update}></InputComp>
      <ShowComp number={state.number}></ShowComp>
    </div>
  );
  // }
};

const InputComp = props => {
  return (
    <div style={redborder}>
      <input
        type="Number"
        onChange={props.update}
        placeholder="Write input in Fahrenheit"
      />
    </div>
  );
};

const ShowComp = props => {
  const fromFahrenheitToCelcius = number => {
    if (number === "") {
      return " Write a number to get value";
    } else {
      return (5 / 9) * (number - 32);
    }
  };

  return (
    <div style={blueborder}>
      Degrees in Celcius :
      {fromFahrenheitToCelcius(props.number)
        ? fromFahrenheitToCelcius(props.number)
        : " Write a number to get value"}
    </div>
  );
};

export default App;
