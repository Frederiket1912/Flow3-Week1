// import React, {useState} from "react";

export default function CountryFacade() {
  // const [labels, setLabels] = useState([]);
  // const [countries, setCountries] = useState([]);
  function handleHttpErrors(res) {
    if (!res.ok) {
      return Promise.reject({ status: res.status, fullError: res.json() });
    }
    return res.json();
  }

  const getLabels = () => {
    //TODO: Get Labels from server
    return fetch("http://localhost:3333/labels").then(handleHttpErrors);
  };

  const getCountries = () => {
    //TODO: Get Countries from server
    return fetch("http://localhost:3333/countries").then(handleHttpErrors);
  };
  return {
    getLabels,
    getCountries
  };
}
