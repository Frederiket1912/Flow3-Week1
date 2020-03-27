import React, { useState, useEffect } from "react";
import CountryTable from "./CountryTable";
import "./App.css";

const App = ({ factory }) => {
  const [labels, setLabels] = useState([]);
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      factory()
        .getLabels()
        .then(data => {
          setLabels(data);
          console.log("LABELS", data);
        })
        .catch(error => {
          console.log("ERROR:", error);
          //Is it a servererror (code 4xx or 5xx)
          if (error.fullError) {
            error.fullError.then(e => {
              if (e.msg) {
                setError(error.status + ":" + e.msg);
              } else {
                setError(error.status + ": Something bad happend");
              }
            });
          } else {
            // or is it a networerror (wrong host or sceme)
            setError("There was a network error");
          }
        });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      factory()
        .getCountries()
        .then(data => {
          setCountries(data);
          console.log("COUNTRIES", data);
        })
        .catch(error => {
          console.log("ERROR:", error);
          //Is it a servererror (code 4xx or 5xx)
          if (error.fullError) {
            error.fullError.then(e => {
              if (e.msg) {
                setError(error.status + ":" + e.msg);
              } else {
                setError(error.status + ": Something bad happend");
              }
            });
          } else {
            // or is it a networerror (wrong host or sceme)
            setError("There was a network error");
          }
        });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="App-header">
        <h2>React, State, Fetch</h2>
      </div>
      <div className="App-intro">
        <p>
          Your initial task is to fetch data from the server (see exercise for
          how to start it), and create a table below, with these data
        </p>
        <CountryTable labels={labels} countries={countries} />
      </div>
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
};

export default App;
