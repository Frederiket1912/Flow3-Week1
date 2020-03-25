import React, { useState, useEffect } from "react";
import "./App.css";

function App5() {
  let countNumber = localStorage.getItem("count");

  return (
    <div className="App">
      <StateHookComponent count={countNumber ? countNumber : 0} increment={5} />
    </div>
  );
}

function StateHookComponent(props) {
  const [count, setCount] = useState(props.count);

  const incrementCount = () => {
    setCount(count + props.increment);
    return count;
  };

  const decrementCount = () => {
    setCount(count - 1);
    return count;
  };

  useEffect(() => {
    localStorage.setItem("count", count);
  });

  return (
    <div>
      <button onClick={incrementCount}>Click to increment</button>
      <button onClick={decrementCount}>Click to decrement</button>
      <p>Count : {count}</p>
    </div>
  );
}

export default App5;
