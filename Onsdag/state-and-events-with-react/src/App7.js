import React, { useState, useEffect } from "react";
import "./App.css";

function App7() {
  return (
    <div className="App">
      <GetChuckJokes />
    </div>
  );
}

function GetChuckJokes() {
  const [chuckjoke, setChuckjoke] = useState("Click to hear about Chuck");
  const [joke, setJoke] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("https://icanhazdadjoke.com", {
        headers: {
          //Accept: "text/plain"
          Accept: "application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          setJoke(data);
        });
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const onClickHandler = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(res => res.json())
      .then(data => {
        setChuckjoke(data);
      });
  };

  return (
    <div>
      <p>Your chuck joke : {chuckjoke.value}</p>
      <button onClick={onClickHandler}>Get random joke</button>
      <p>Your other joke : {joke.joke}</p>
    </div>
  );
}

export default App7;
