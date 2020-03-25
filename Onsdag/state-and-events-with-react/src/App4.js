import React from "react";
import "./App.css";

function App4() {
  return (
    <div className="App">
      <RenderNames />
    </div>
  );
}

function RenderNames() {
  const names = ["Jan", "Per", "Ole"];

  const listNames = names.map((name, index) => {
    return <li key={index}>{name}</li>;
  });

  return <ul>{listNames}</ul>;
}

export default App4;
