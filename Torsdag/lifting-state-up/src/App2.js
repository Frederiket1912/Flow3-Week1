import React, { useState } from "react";
import "./App.css";
import uuid from "uuid/v1";
import NewPerson from "./NewPerson";
import PersonList from "./PersonList";

function App() {
  const initialData = [
    { id: uuid(), name: "Peter" },
    { id: uuid(), name: "Ole" },
    { id: uuid(), name: "Jan" }
  ];

  const [persons, setPersons] = useState(initialData);
  const [newPerson, setNewPerson] = useState({ id: "", name: "" });

  const addPerson = person => {
    if (person.id === "") {
      // id=-1 Indicates a new object
      person.id = uuid();
      persons.push(person);
    } else {
      //if id != "", it's an existing person. Find it and add changes
      let personToEdit = persons.find(p => p.id === person.id);
      personToEdit.name = person.name;
    }
    setPersons([...persons]);
    setNewPerson({ id: "", name: "" });
  };

  const deletePerson = id => {
    const personsAfterDeletion = persons.filter(function(person) {
      return person.id !== id;
    });
    setPersons(personsAfterDeletion);
  };
  const editPerson = id => {
    const personToEdit = persons.find(person => person.id === id);
    setNewPerson({ ...personToEdit });
  };

  return (
    <div className="container outer">
      <h2 style={{ textAlign: "center", marginBottom: 25 }}>
        Props and Lifting State Demo
      </h2>

      <div className="row">
        <div className="col-6 allTodos">
          <PersonList
            persons={persons}
            editPerson={editPerson}
            deletePerson={deletePerson}
          />
        </div>
        <div className="col-5 new-todo">
          <NewPerson addPerson={addPerson} nextPerson={newPerson} />
        </div>
      </div>
    </div>
  );
}

export default App;
