import React, { useState } from "react";

export default function AddEditPerson(props) {
  const [person, setPerson] = useState({ ...props.newPerson });

  /* Add the required changes to use Reacts "Controlled Component Pattern" 
     to handle inputs related to a person */
  const handleChange = evt => {
    const val = evt.target.value;
    const id = evt.target.id;
    setPerson({ ...person, [id]: val });
  };

  const handleSubmit = evt => {
    if (person.name === "") {
      return;
    }
    console.log("Person on commit : " + JSON.stringify(person));
    props.addEditPerson(person);
    evt.preventDefault();
  };

  const handleCancel = evt => {
    person.id = "";
    person.name = "";
    person.age = "";
    person.gender = "";
    person.email = "";
    setPerson({ ...person });
  };

  return (
    <div>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="control-label col-sm-3">Id:</label>
          <div className="col-sm-9">
            <input
              value={person.id}
              className="form-control"
              readOnly
              id="id"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="name">
            Name:
          </label>
          <div className="col-sm-9">
            <input
              value={person.name}
              onChange={handleChange}
              className="form-control"
              id="name"
              placeholder="Enter Name"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="age">
            Age:
          </label>
          <div className="col-sm-9">
            <input
              value={person.age}
              onChange={handleChange}
              type="number"
              className="form-control"
              id="age"
              placeholder="Enter age"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="email">
            Email:
          </label>
          <div className="col-sm-9">
            <input
              value={person.email}
              onChange={handleChange}
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="pwd">
            Gender:
          </label>
          <div className="col-sm-9">
            <input
              value={person.gender}
              onChange={handleChange}
              className="form-control"
              id="gender"
              placeholder="Enter Gender"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-3 col-sm-9">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button
              style={{ marginLeft: 5 }}
              type="button"
              className="btn btn-dark"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
      <p>
        name : {person.name}, email : {person.email}, gender : {person.gender},
        age : {person.age}, id : {person.id}
      </p>
      <p>Please provide me with the ability to create new persons</p>
      <p>And update the backend when submitted</p>
    </div>
  );
}
