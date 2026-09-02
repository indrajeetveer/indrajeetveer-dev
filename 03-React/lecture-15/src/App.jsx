import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import nav from './components/Navbar'
import Navbar from "./components/Navbar";
import Courses from "./Pages/Courses";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes> // container
         <Route path="/"  element={<Home/>}></Route>
         <Route path="/about" element={<About/>}></Route>
         <Route path="/courses" element={<Courses/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
