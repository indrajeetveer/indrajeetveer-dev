import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </div>
  );
};

export default App;
