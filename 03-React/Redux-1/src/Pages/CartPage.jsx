import React from "react";
import { useDispatch } from "react-redux";
import { decrement } from "../Redux/CounterSlice";

const CartPage = () => {
  let dispatch = useDispatch();
  return (
    <div className="mt-20 px-10">
      <h1>Cartpage</h1>
      <button
      className="bg-amber-400 px-2 py-1 rounded"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default CartPage;
