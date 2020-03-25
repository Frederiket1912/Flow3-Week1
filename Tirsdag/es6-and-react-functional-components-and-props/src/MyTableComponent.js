import React from "react";

const MyTableComponent = () => {
  const names = [
    { fname: "Anders", lname: "Henriksen" },
    { fname: "Britta", lname: "Albertsen" },
    { fname: "Kalle", lname: "Fredborg" }
  ];
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
          {names.map(p => (
            <tr>
              <td>{p.fname}</td>
              <td>{p.lname}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTableComponent;
