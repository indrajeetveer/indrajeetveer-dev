import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Course from "./pages/Course";
import { Cohort1 } from "./pages/Cohort1";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/men" element={<Men />}></Route>
        <Route path="/products/women" element={<Women />}></Route>

        <Route path="/course" element={<Course />}></Route>
        <Route path="/course/cohort" element={<Cohort1 />}></Route>
      </Routes>
    </div>
  );
};

export default App;
