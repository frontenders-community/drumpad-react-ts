import React from "react";
import "./App.scss";
import Pad from "./components/pad/pad.component";

function App() {
  return (
    <div className="app">
      <div className="pad-container">
        <Pad />
      </div>
      <div className="actions-container">Actions</div>
    </div>
  );
}

export default App;
