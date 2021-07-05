import React, { useState } from "react";
import "./App.css";
import Display from "./Display";
import Dashboard from "./Dashboard";

function App() {
  const [atBat, setAtBat] = useState({
    hits: 0,
    strikes: 0,
    balls: 0,
    fouls: 0
  });

  return (
    <div className="App">
      <Display atBat={atBat} />
      <Dashboard atBat={atBat} setAtBat={setAtBat} />
    </div>
  );
}

export default App;
