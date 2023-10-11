import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Card from "./pages/Card";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/card" element={<Card />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
