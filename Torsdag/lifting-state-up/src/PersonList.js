import React from "react";

const PersonList = ({ persons, deletePerson, editPerson }) => {
  return (
    <React.Fragment>
      <h2>All Names</h2>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>ID</th>
          </tr>
          {persons.map(person => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.id}</td>
              <td>
                <button
                  onClick={e => {
                    e.preventDefault();
                    deletePerson(person.id);
                  }}
                >
                  delete
                </button>
                <button
                  onClick={e => {
                    e.preventDefault();
                    editPerson(person.id);
                  }}
                >
                  edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};
export default PersonList;
