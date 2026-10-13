import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ProductCart from "../components/ProductCart";
import axios from "axios";

const Home = () => {
  let dispatch = useDispatch();
  const [data, setdata] = useState([]);

  let getData = async () => {
    let response = await axios.get("https://fakestoreapi.com/products");
    setdata(response.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="mt-20">
      <h1 className="text-3xl text-center font-semibold">Our Product</h1>

      <div className="max-w-[1320px] mx-auto grid grid-cols-4 gap-5 mt-5">
        {data.map((elem, idx) => {
          return <ProductCart key={idx} product={elem} />;
        })}
      </div>

      {/* <h1>Home</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
        className=" px-2 py-1 bg-amber-400 rounded"
      >
        Increment
      </button> */}
    </div>
  );
};

export default Home;
