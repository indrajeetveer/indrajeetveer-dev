import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import nav from './components/Navbar'
import Navbar from "./components/Navbar";
import Courses from "./Pages/Courses";
import Coder from "./Pages/Coder";
import Coder1 from "./Pages/Coder1";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes> // container
         <Route path="/"  element={<Home/>}></Route>
         <Route path="/about" element={<About/>}></Route>
         <Route path="/courses" element={<Courses/>}>
            <Route path="/courses/coder" element={<Coder/>}></Route>
            <Route path="/courses/coder1" element={<Coder1/>}></Route>
         </Route>
      </Routes>
    </div>
  );
};

export default App;
