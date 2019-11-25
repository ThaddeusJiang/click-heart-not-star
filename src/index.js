import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Pan from "./Pan";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>click ♡ not ☆</h1>

        <p>If your score less 30, you actually have stress.</p>
      </div>
      <Pan />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
