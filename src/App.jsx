import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./assets/Pages/Home";
import Login from "./assets/Pages/Login";
import CardPage from "./assets/Pages/CardPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/card" element={<CardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
