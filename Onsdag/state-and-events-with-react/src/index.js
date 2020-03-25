import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";
import App5 from "./App5";
import App6 from "./App6";
import App7 from "./App7";

let app = <App />;

const DontUseMeForReal = () => {
  return (
    <div className="App" onClick={handleSelect}>
      <a href="/" className="x" id="app1">
        Class ex1
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app2">
        Class ex2
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app3">
        Class ex3
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app4">
        Class ex4
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app5">
        ex1
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app6">
        ex2
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app7">
        ex3
      </a>{" "}
      &nbsp;
      {/* Add as many as you have exercises, but remember className="x" */}
      {app}
    </div>
  );
};

function handleSelect(event) {
  event.preventDefault();
  if (event.target.className !== "x") {
    return;
  }
  const id = event.target.id;
  switch (id) {
    case "app1":
      app = <App />;
      break;
    case "app2":
      app = <App2 />;
      break;
    case "app3":
      app = <App3 />;
      break;
    case "app4":
      app = <App4 />;
      break;
    case "app5":
      app = <App5 />;
      break;
    case "app6":
      app = <App6 />;
      break;
    case "app7":
      app = <App7 />;
      break;
    default:
      app = <App />;
      break;
  }
  ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));
