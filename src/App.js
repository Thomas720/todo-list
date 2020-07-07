import React from "react";
import ToDo from "./components/ToDo";
import "./styles/styles.sass";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Thomas's ToDo App</h1>
      </header>
      <ToDo />
    </div>
  );
}

export default App;
