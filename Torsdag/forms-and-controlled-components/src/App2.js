import React from "react";
import "./App.css";
import ApiFacade from "./ApiFacade";
import uuid from "uuid/v1";

function App() {
  const book = {
    id: uuid(),
    title: "Ny Bog",
    author: "Markus",
    rating: 10,
    year_published: 2000
  };
  return (
    <div className="App">
      <ApiFacade url="http://localhost:4000/books" />
      <ApiFacade url="http://localhost:4000/books" method="POST" data={book} />
    </div>
  );
}

export default App;
