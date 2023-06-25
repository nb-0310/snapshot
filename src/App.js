import React from "react";
import "./App.css";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Mountains from "./Components/Mountains";
import Beaches from "./Components/Beaches";
import Birds from "./Components/Birds";
import Food from "./Components/Food";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Mountain" element={<Mountains />} />
        <Route path="/Beaches" element={<Beaches />} />
        <Route path="/Birds" element={<Birds />} />
        <Route path="/Food" element={<Food />} />
      </Routes>
    </div>
  );
}

export default App;
