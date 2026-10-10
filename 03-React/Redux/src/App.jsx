import React from "react";
import "./app.css";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./redux/slices/counterSlice";
import { decrement } from "./redux/slices/counterSlice";

const App = () => {
  const num = useSelector((state) => state.counter.value);
  const dispath = useDispatch();

  return (
    <div>
      <h1>{num}</h1>
      <button
        onClick={() => {
          dispath(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispath(decrement());
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default App;
