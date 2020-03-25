import React from "react";
import MyTableComponent from "./MyTableComponent";

import "./App.css";

export default App;

function App() {
  return (
    <div className="App">
      <MyComp />
      <MyTableComponent />
      <CarComponent
        cars={[{ name: "Toyota" }, { name: "BMW" }, { name: "Skoda" }]}
      />
      <CarComponentFunc
        cars={[{ name: "Toyota" }, { name: "BMW" }, { name: "Skoda" }]}
      />
    </div>
  );
}

class CarComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Car Make</th>
            </tr>
            {this.props.cars.map(c => (
              <tr>
                <td>{c.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const CarComponentFunc = props => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Car Make</th>
          </tr>
          {props.cars.map(c => (
            <tr>
              <td>{c.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const MyComp = () => {
  return <div>Hello from my Component</div>;
};
