import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Pan from "./Pan";

function App() {
  return (
    <div className="App">
      <h1>click ♡ not ☆</h1>
      <Pan />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
