import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>React App</h1>
    </div>
  );
}

export default App;
