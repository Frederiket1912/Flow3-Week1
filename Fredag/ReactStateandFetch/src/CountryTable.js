import React from "react";

const CountryTable = props => {
  const arrayCheck = arr => {
    return arr.length > 1 ? arr[0] + " (+" + (arr.length - 1) + ")" : arr[0];
  };

  return (
    <div>
      <p>
        Replace the thead section with a row generated from the Labels endpoint
      </p>
      <p>
        Replace the tbody section with rows generated from the countries
        endpoint
      </p>
      <table className="table">
        <thead>
          <tr>
            {props.labels.map((label, index) => (
              <th key={index}>{label}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {props.countries.map((country, index) => (
            <tr key={index}>
              <td>{country.name}</td>
              <td>{country.capital}</td>
              <td>{country.region}</td>
              <td>{country.population}</td>
              <td>{country.area}</td>
              <td>{arrayCheck(country.timezones)}</td>
              <td>{arrayCheck(country.borders)}</td>
              <td>{arrayCheck(country.topLevelDomain)}</td>
              <td>{arrayCheck(country.currencies)}</td>
              <td>{arrayCheck(country.languages)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CountryTable;
