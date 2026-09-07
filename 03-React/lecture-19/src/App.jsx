import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route ,Routes } from "react-router-dom";
import Product from "./Pages/Product";
import Home from "./Pages/Home"
import ProductDetails  from "./Pages/ProductDetails";

const App = () => {
  return (
     <div>
        <Routes>
           <Route path="/" element={<Home/>}></Route>
           <Route path="/Products" element={<Product/>}></Route>
           <Route path="/Products/:productId" element={<ProductDetails/>}></Route>
        </Routes>
     </div>
  );
};

export default App;
