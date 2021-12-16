import React from "react";
import "./App.css";

function App() {
  
  function get() {
    const data = fetch("https://rickandmortyapi.com/api/character/18").then(response => response.json());
  }

  const data = get()
  console.log(data);


  return <div className="App"></div>;
}

export default App;
