import React from "react";
import PropTypes from "prop-types";
import { names } from "./file2";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function WelcomePerson(props) {
  return (
    <div>
      <h1>
        Hello, {props.person.firstName} {props.person.lastName} <br></br>
        Email : {props.person.email}
      </h1>
    </div>
  );
}

function App() {
  const [person1, person2, person3] = names;
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      {/* <Welcome />
      <Welcome name={45} /> */}
      {/* <WelcomePerson person={person1} />
      <WelcomePerson person={person2} />
      <WelcomePerson person={person3} /> */}
      {names.map(person => (
        <WelcomePerson key={names.indexOf(person)} person={person} />
      ))}
      ;
    </div>
  );
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired
};

WelcomePerson.propTypes = {
  profileProp: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  })
};

export default App;
