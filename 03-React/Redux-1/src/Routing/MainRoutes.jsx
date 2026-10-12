import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import CartPage from "../Pages/CartPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cartpage" element={<CartPage />} />
    </Routes>
  );
};

export default MainRoutes;
