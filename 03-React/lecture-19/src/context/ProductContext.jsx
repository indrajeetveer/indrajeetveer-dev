import React from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const productDataContext = createContext();

const ProductContext = (props) => {
  const [productData, setproductData] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setproductData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <productDataContext.Provider value={productData}>
        {props.children}
      </productDataContext.Provider>
    </div>
  );
};

export default ProductContext;
