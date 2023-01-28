import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ProductList from "../src/pages/ProductList";
import ProductAdd from "../src/pages/ProductAdd";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/addproduct" element={<ProductAdd />} />
      </Routes>
    </div>
  );
}

export default App;
