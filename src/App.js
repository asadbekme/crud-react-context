import React from "react";
import { Route, Routes } from "react-router-dom";
import { AddEmployee, EditEmployee, Home } from "./components";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/edit-employee/:id" element={<EditEmployee />} />
      </Routes>
    </div>
  );
};

export default App;
