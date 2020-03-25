import React, { useState } from "react";
import "./App.css";

function App2() {
  return (
    <div className="App">
      <GenerateList />
    </div>
  );
}

function GenerateList() {
  const [array, setArray] = useState([]);

  const updateList = e => {
    //keycode 13 is enter
    if (e.keyCode === 13) {
      setArray([...array, e.target.value]);
      e.target.value = "";
    }
  };

  return (
    <div>
      <p>Your list : {array}</p>
      <input type="text" onKeyUp={updateList} />
    </div>
  );
}

export default App2;
