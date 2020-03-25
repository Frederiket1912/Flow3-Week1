import React, { useState, useEffect } from "react";
import "./App.css";

function App6() {
  return (
    <div className="App">
      <TimeDisplayer />
    </div>
  );
}

export default App6;

function TimeDisplayer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <p>The time is : {time}</p>;
}
