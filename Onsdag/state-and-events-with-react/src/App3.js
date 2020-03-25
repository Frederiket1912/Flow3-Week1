import React, { useState, useEffect } from "react";
import "./App.css";

function App3() {
  return (
    <div className="App">
      <GetAlbums />
    </div>
  );
}

function GetAlbums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then(res => res.json())
      .then(data => {
        setAlbums(data);
      });
  });

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <th>ID</th>
          </tr>
          {albums.map(a => (
            <tr key={a.id}>
              <td>{a.title}</td>
              <td>{a.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App3;
