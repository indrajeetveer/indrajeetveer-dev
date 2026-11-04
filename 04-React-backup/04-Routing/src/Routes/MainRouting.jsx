import React from "react";
import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contect from "../Pages/Contect";
const MainRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contect" element={<Contect />} />
    </Routes>
  );
};

export default MainRouting;
