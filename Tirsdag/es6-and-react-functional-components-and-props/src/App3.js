import React from "react";
import person from "./file2";
import { males } from "./file2";
import { females } from "./file2";

function App3() {
  let { firstName, email, gender, lastName } = person;
  let friends = [...males, ...females];
  let array2 = [...males, "Kurt", "Helle", ...females, "Tina"];
  let personV2 = {
    email,
    firstName,
    friends,
    gender,
    lastName,
    phone: 123456
  };
  console.log(personV2);
  console.log(friends);
  console.log(array2);
  return (
    <div className="App3">
      <p>
        {firstName}, {email}
      </p>
    </div>
  );
}

export default App3;
