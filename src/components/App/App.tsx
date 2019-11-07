import React from "react";
import { Commands } from "../Commands/Commands";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Robot simulation</h1>
      <Commands />
    </div>
  );
};

export default App;
