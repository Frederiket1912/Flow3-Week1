import React, { useState, useEffect } from "react";

function NumberList({ numbers }) {
  console.log("--NUMBERS -->", numbers);

  const ListItem = props => {
    return <li>{props.value}</li>;
  };

  const listItems = numbers.map((n, index) => (
    <ListItem key={index} value={n} />
  ));
  return <ul>{listItems}</ul>;
}

function NumberTable({ numbers }) {
  const TableItem = props => {
    return (
      <tr>
        <td>{props.value}</td>
      </tr>
    );
  };

  const tableItems = numbers.map((n, index) => (
    <TableItem key={index} value={n} />
  ));

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Numbers</th>
          </tr>
          {tableItems}
        </tbody>
      </table>
    </div>
  );
}

function ListDemo(props) {
  console.log(props.numbers);
  return (
    <div>
      <h2>All numbers passed in via props</h2>
      <NumberList numbers={props.numbers} />
      <NumberTable numbers={props.numbers} />
    </div>
  );
}
export default function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4]);

  useEffect(() => {
    const interval = setInterval(() => {
      let rand = Math.floor(Math.random() * 100) + 1;
      setNumbers([...numbers, rand]);
    }, 5000);
    return () => clearInterval(interval);
  });

  return <ListDemo numbers={numbers} />;
}
