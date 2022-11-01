import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <div>
      <p>¡Bienvenidos a E-COMMERCE!</p>
      <Routes>
      <Route path="/" element={<p/>} />
      </Routes>
    </div>
  );
};

export default App;