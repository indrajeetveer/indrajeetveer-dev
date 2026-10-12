import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "../Redux/CounterSlice";

const Home = () => {
  let dispatch = useDispatch();
  return (
    <div className="mt-20 px-10">
      <h1>Home</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
        className=" px-2 py-1 bg-amber-400 rounded"
      >
        Increment
      </button>
    </div>
  );
};

export default Home;
